import FlightsResultCard from "./FlightsResultCard";

export default function FlightsResultList({
  resultados, multiplicador, ida, vuelta, clase, pasajeros,
  onSelect, onDetails
}) {
  if (!resultados.length) return <div className="empty" style={{ display: "block" }} />;

  return (
    <div className="list">
      {resultados.map((vuelo, i) => (
        <FlightsResultCard
          key={i}
          vuelo={vuelo}
          idx={i}
          ida={ida}
          vuelta={vuelta}
          clase={clase}
          pasajeros={pasajeros}
          multiplicador={multiplicador}
          onSelect={onSelect}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}
