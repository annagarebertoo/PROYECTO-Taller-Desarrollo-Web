import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

function SearchForm() {
  const navigate = useNavigate();

  const origenRef = useRef(null);
  const destinoRef = useRef(null);
  const idaRef = useRef(null);
  const vueltaRef = useRef(null);
  const pasajerosRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      origen: origenRef.current.value,
      destino: destinoRef.current.value,
      ida: idaRef.current.value || '',
      vuelta: vueltaRef.current.value || '',
      pax: pasajerosRef.current.value || '1'
    });
    navigate(`/vuelos?${params.toString()}`);
  }

  return (
    <form className="search-card" onSubmit={onSubmit}>
      <div className="fields">

        <div className="field">
          <label htmlFor="origen">Origen</label>
          <select id="origen" name="origen" required defaultValue="" ref={origenRef}>
            <option value="" disabled>Seleccioná un origen</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Rosario">Rosario</option>
            <option value="Mendoza">Mendoza</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="destino">Destino</label>
          <select id="destino" name="destino" required defaultValue="" ref={destinoRef}>
            <option value="" disabled>Seleccioná un destino</option>
            <option value="Egipto">Egipto</option>
            <option value="Maldivas">Maldivas</option>
            <option value="Mallorca">Mallorca</option>
            <option value="Nueva York">Nueva York</option>
            <option value="Paris">Paris</option>
            <option value="Santorini">Santorini</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="ida">Ida</label>
          <input id="ida" name="ida" type="date" ref={idaRef} />
        </div>

        <div className="field">
          <label htmlFor="vuelta">Vuelta</label>
          <input id="vuelta" name="vuelta" type="date" ref={vueltaRef} />
        </div>

        <div className="field small">
          <label htmlFor="pasajeros">Pasajeros</label>
          <select id="pasajeros" name="pasajeros" required defaultValue="1" ref={pasajerosRef}>
            <option value="1">1 pasajero</option>
            <option value="2">2 pasajeros</option>
            <option value="3">3 pasajeros</option>
            <option value="4">4 pasajeros</option>
            <option value="5">5 pasajeros</option>
            <option value="6">6 pasajeros</option>
          </select>
        </div>

        <div className="field">
          <label className="hidden">Buscar</label>
          <button className="btn btn-primary full" type="submit">Buscar vuelos</button>
        </div>
      </div>

      <div className="options" role="group" aria-label="Clase de vuelo">
        <label><input type="radio" name="clase" value="Economica" required /> Económica</label>
        <label><input type="radio" name="clase" value="Premium" /> Premium</label>
        <label><input type="radio" name="clase" value="Business" /> Business</label>
        <label><input type="radio" name="clase" value="First" /> First</label>
      </div>
    </form>
  );
}
export default SearchForm;
