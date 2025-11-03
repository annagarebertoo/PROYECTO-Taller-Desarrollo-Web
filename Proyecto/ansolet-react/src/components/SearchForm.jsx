function SearchForm() {
  return (
    <form className="search-card" onSubmit={(e)=>e.preventDefault()}>
      <div className="fields">

        <div className="field">
          <label htmlFor="origen">Origen</label>
          <select id="origen" name="origen" required defaultValue="">
            <option value="" disabled>Seleccioná un origen</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Rosario">Rosario</option>
            <option value="Mendoza">Mendoza</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="destino">Destino</label>
          <select id="destino" name="destino" required defaultValue="">
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
          <input id="ida" name="ida" type="date" />
        </div>

        <div className="field">
          <label htmlFor="vuelta">Vuelta</label>
          <input id="vuelta" name="vuelta" type="date" />
        </div>

        <div className="field small">
          <label htmlFor="pasajeros">Pasajeros</label>
          <select id="pasajeros" name="pasajeros" required defaultValue="1">
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
