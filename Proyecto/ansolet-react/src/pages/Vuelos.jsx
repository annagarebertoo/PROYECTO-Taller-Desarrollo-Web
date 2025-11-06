// src/pages/Vuelos.jsx
import { useMemo } from 'react'

function Vuelos(){
  // Leer params de la URL
  const params = new URLSearchParams(location.search);
  const q = {
    origen: params.get('origen') || '',
    destino: params.get('destino') || '',
    ida: params.get('ida') || '',
    vuelta: params.get('vuelta') || '',
    pax: params.get('pax') || '1'
  }

  // Base local (si antes cargaron con localStorage en la versión HTML)
  const base = useMemo(()=>{
    try{
      return JSON.parse(localStorage.getItem('flights') || '[]');
    }catch{ return [] }
  }, []);

  // Filtro simple por origen/destino (ignorando mayúsculas)
  const flights = base.filter(f =>
    f.origin?.toLowerCase().includes(q.origen.toLowerCase()) &&
    f.destination?.toLowerCase().includes(q.destino.toLowerCase())
  );

  return (
    <main className="container" style={{padding:"2rem 0"}}>
      <h1>Vuelos disponibles</h1>
      <p><strong>Consulta:</strong> {q.origen} → {q.destino} {q.ida ? `| Ida: ${q.ida}` : ''} {q.vuelta ? `| Vuelta: ${q.vuelta}` : ''} | Pax: {q.pax}</p>

      {flights.length === 0 ? (
        <p>No encontramos coincidencias en la base local. Podés cargar nuevos vuelos desde “Agregar productos → Añadir vuelo” en la versión HTML o más adelante haremos el *admin* en React.</p>
      ) : (
        <ul style={{listStyle:"none", padding:0, marginTop:"1rem"}}>
          {flights.map(f => (
            <li key={f.id} className="card-ghost" style={{padding:"1rem", borderRadius:"16px", marginBottom:"10px"}}>
              <strong>{f.origin}</strong> → <strong>{f.destination}</strong> &nbsp;|&nbsp; {f.date} &nbsp;|&nbsp; {f.airline} {f.flightNo} &nbsp;|&nbsp; {f.duration} &nbsp;|&nbsp; {f.stops} &nbsp;|&nbsp; <b>USD {f.price}</b>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
export default Vuelos
