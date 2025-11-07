// src/pages/DestinoNuevaYork.jsx
import DestinationPage from "../components/DestinationPage";
import "./Destinos.css";
import "../index.css";

export default function DestinoNuevaYork() {
  return (
    <DestinationPage
      config={{
        slug: "nueva-york",
        title: "Nueva York",
        priceChip: "Desde US$ 1.499",
        bestTimeChip: "Mejor época: Abr–Jun, Sep–Nov",
        heroImage: "/imagenes/nuevayork.jpg",
        about: {
          heading: "¿Por qué elegir Nueva York?",
          paragraphs: [
            "La ciudad que nunca duerme: museos de talla mundial, barrios con identidad, gastronomía de todos los rincones y espectáculos imperdibles en Broadway.",
            "Entre rascacielos, parques y el río Hudson, NYC se vive caminando y en subway."
          ]
        },
        gallery: [
          "/imagenes/nuevayorkextra1 (2).jpg",
          "/imagenes/nuevayorkextra1.jpg",
          "/imagenes/nuevayorkextra2.jpg"
        ],
        highlights: [
          "Miradores Top of the Rock o Edge y paseo por High Line.",
          "Central Park, Times Square y Puente de Brooklyn.",
          "Museos Met, MoMA y American Museum of Natural History.",
          "Ferry a la Estatua de la Libertad y Ellis Island."
        ],
        hotels: [
          "<strong>The Plaza</strong> · 5★",
          "<strong>Park Lane New York</strong> · 5★",
          "<strong>CitizenM Times Square</strong> · 4★"
        ],
        sidebar: {
          datos: [
            "Moneda: Dólar estadounidense (USD).",
            "Transporte: subway 24/7 y buses; pago con OMNY.",
            "Conexiones: aeropuertos JFK, LGA y EWR.",
            "Clima: inviernos fríos; veranos calurosos; otoño y primavera templados."
          ],
          incluye: [
            "Traslado aeropuerto ↔ hotel o MetroCard/OMNY precargado.",
            "CityPASS o entradas a miradores y museos (opcional).",
            "Seguro de viaje."
          ]
        },
        faq: [
          { q: "¿Cuántas noches recomiendan?", a: "Entre 4 y 6 noches para lo esencial + 1 excursión a otro barrio/borough." },
          { q: "¿Conviene el CityPASS / Go City?", a: "Si planeás 2–3 atracciones por día, ahorrás y evitás filas en varias sedes." },
          { q: "¿Dónde conviene alojarse?", a: "Midtown por ubicación; Lower Manhattan para paseos; Brooklyn para onda local." },
          { q: "¿Propinas?", a: "Restaurantes 15–20%; bares USD 1–2 por bebida; hoteles/traslados según servicio." }
        ]
      }}
    />
  );
}
