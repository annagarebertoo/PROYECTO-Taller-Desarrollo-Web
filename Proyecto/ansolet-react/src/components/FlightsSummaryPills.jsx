const fFecha = (iso) => {
  if (!iso) return "-";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function FlightsSummaryPills({ origen, destino, ida, vuelta, pasajeros, clase }) {
  return (
    <div className="pills">
      <span className="pill">Origen: {origen || "-"}</span>
      <span className="pill">Destino: {destino || "-"}</span>
      <span className="pill">Ida: {fFecha(ida)}</span>
      <span className="pill">Vuelta: {fFecha(vuelta)}</span>
      <span className="pill">Pasajeros: {pasajeros || "-"}</span>
      <span className="pill">Clase: {clase || "-"}</span>
    </div>
  );
}
