export default function FlightsResultCard({
  vuelo, idx, ida, vuelta, clase, pasajeros, multiplicador,
  onSelect, onDetails
}) {
  const escalasTxt = vuelo.escalas === 0 ? "Directo" : (vuelo.escalas === 1 ? "1 escala" : `${vuelo.escalas} escalas`);
  const precio = Math.round(vuelo.baseUSD * multiplicador);
  const fmtUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <article className="item">
      <div className="col" style={{ flex: "1 1 260px" }}>
        <div className="ruta">{vuelo.origen} → {vuelo.destino}</div>
        <div className="meta">{vuelo.aerolinea} • {vuelo.codigo}</div>
        <div className="badges">
          <span className="badge">{escalasTxt}</span>
          {clase && <span className="badge">Clase: {clase}</span>}
          {pasajeros && <span className="badge">{pasajeros} pasajero/s</span>}
        </div>
      </div>

      <div className="col">
        <div className="meta"><strong>Sale</strong> {vuelo.sale}</div>
        <div className="meta"><strong>Llega</strong> {vuelo.llega}</div>
        <div className="meta">{vuelo.duracion}</div>
      </div>

      <div className="col" style={{ alignItems: "flex-end", gap: 10 }}>
        {ida && <div className="meta">Ida: {ida.split("-").reverse().join("/")}</div>}
        {vuelta && <div className="meta">Vuelta: {vuelta.split("-").reverse().join("/")}</div>}
        <div className="precio">{fmtUSD.format(precio)}</div>
        <div className="acciones">
          <button className="btn btn-outline" onClick={() => onDetails(idx)}>Detalles</button>
          <button className="btn btn-primary" onClick={() => onSelect(idx)}>Elegir</button>
        </div>
      </div>
    </article>
  );
}
