import { useMemo, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import FlightsHeroTitle from "../components/FlightsHeroTitle";
import FlightsSummaryPills from "../components/FlightsSummaryPills";
import FlightsResultList from "../components/FlightsResultList";

// Importa tu CSS global (ajusta la ruta si hiciera falta)
import "../index.css";
// Estilos específicos de esta page (opcional)
import "./flights-page.css";

/** Mock basado en tu HTML original */
const FLIGHTS_DATA = [
  { origen:"Córdoba",      destino:"Paris",       aerolinea:"Air France", codigo:"AF 409", sale:"13:40", llega:"06:15 +1", duracion:"14h 35m", escalas:1, baseUSD:1550 },
  { origen:"Córdoba",      destino:"Santorini",   aerolinea:"Aegean",     codigo:"A3 721", sale:"09:10", llega:"03:20 +1", duracion:"17h 10m", escalas:2, baseUSD:1390 },
  { origen:"Buenos Aires", destino:"Nueva York",  aerolinea:"American",   codigo:"AA 900", sale:"22:55", llega:"08:10",    duracion:"11h 15m", escalas:0, baseUSD:1220 },
  { origen:"Buenos Aires", destino:"Maldivas",    aerolinea:"Qatar",      codigo:"QR 774", sale:"23:50", llega:"23:45 +1", duracion:"17h 55m", escalas:1, baseUSD:1890 },
  { origen:"Rosario",      destino:"Mallorca",    aerolinea:"Iberia",     codigo:"IB 351", sale:"12:30", llega:"08:20 +1", duracion:"15h 50m", escalas:1, baseUSD:1440 },
  { origen:"Mendoza",      destino:"Egipto",      aerolinea:"Turkish",    codigo:"TK 16",  sale:"18:45", llega:"19:05 +1", duracion:"20h 20m", escalas:2, baseUSD:2010 },
  { origen:"Buenos Aires", destino:"Paris",       aerolinea:"Air France", codigo:"AF 229", sale:"17:55", llega:"11:10 +1", duracion:"13h 15m", escalas:0, baseUSD:1360 },
  { origen:"Rosario",      destino:"Paris",       aerolinea:"Iberia",     codigo:"IB 356", sale:"08:20", llega:"05:15 +1", duracion:"19h 55m", escalas:2, baseUSD:1480 },
  { origen:"Mendoza",      destino:"Santorini",   aerolinea:"Aegean",     codigo:"A3 733", sale:"10:05", llega:"09:10 +1", duracion:"21h 05m", escalas:2, baseUSD:1590 },
];

const MULT_CLASE = { Economica: 1.00, Premium: 1.25, Business: 1.60, First: 2.10 };

export default function VuelosPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const origen    = params.get("origen")    || "";
  const destino   = params.get("destino")   || "";
  const ida       = params.get("ida")       || "";
  const vuelta    = params.get("vuelta")    || "";
  // Soporta ambos: ?pasajeros= y ?pax= (tu SearchForm usa "pax")
  const pasajeros = params.get("pasajeros") || params.get("pax") || "";
  const clase     = params.get("clase")     || "";
  const multiplicador = MULT_CLASE[clase] || 1.0;

  const resultados = useMemo(() => {
    let r = FLIGHTS_DATA.filter(v =>
      (!origen  || v.origen.toLowerCase()  === origen.toLowerCase()) &&
      (!destino || v.destino.toLowerCase() === destino.toLowerCase())
    );
    if (!r.length) {
      r = FLIGHTS_DATA.filter(v => !origen || v.origen.toLowerCase() === origen.toLowerCase()).slice(0, 5);
      if (!r.length) r = FLIGHTS_DATA.slice(0, 5);
    }
    return r;
  }, [origen, destino]);

  const persistir = useCallback((v) => {
    const precio = Math.round(v.baseUSD * multiplicador);
    const payload = {
      ...v,
      precioUSD: precio,
      clase: clase || "Economica",
      pasajeros: pasajeros || "1",
      ida,
      vuelta
    };
    sessionStorage.setItem("vueloSeleccionado", JSON.stringify(payload));
  }, [multiplicador, clase, pasajeros, ida, vuelta]);

  const onDetails = (idx) => {
    const v = resultados[idx];
    persistir(v);
    const precio = Math.round(v.baseUSD * multiplicador);
    const fmtUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
    alert(`${v.aerolinea} ${v.codigo}
${v.origen} → ${v.destino}
Sale ${v.sale} · Llega ${v.llega}
Duración ${v.duracion}
${v.escalas===0?'Directo':(v.escalas+' escalas')}
Precio ${fmtUSD.format(precio)}`);
  };

  const onSelect = (idx) => {
    const v = resultados[idx];
    persistir(v);
    // Redirigí directo al paquete si querés:
    // navigate("/paquete");
    alert(`Seleccionaste ${v.aerolinea} ${v.codigo}. ¡Listo para continuar!`);
  };

  return (
    <div className="vuelos-page hero-bg">
      <FlightsHeroTitle title="Vuelos disponibles" />

      <section className="section">
        <div className="container">
          <div className="heading">
            <button className="back" onClick={() => navigate(-1)}>Modificar búsqueda</button>
          </div>

          <FlightsSummaryPills
            origen={origen}
            destino={destino}
            ida={ida}
            vuelta={vuelta}
            pasajeros={pasajeros}
            clase={clase}
          />

          <FlightsResultList
            resultados={resultados}
            multiplicador={multiplicador}
            ida={ida}
            vuelta={vuelta}
            clase={clase}
            pasajeros={pasajeros}
            onSelect={onSelect}
            onDetails={onDetails}
          />
        </div>
      </section>
    </div>
  );
}
