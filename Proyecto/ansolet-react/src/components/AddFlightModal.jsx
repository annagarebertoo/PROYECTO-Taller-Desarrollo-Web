// src/components/AddFlightModal.jsx
import { useEffect, useRef } from "react";

function ensureOption(select, label){
  if(!select || !label) return;
  const exists = Array.from(select.options).some(o => o.textContent.trim().toLowerCase() === label.trim().toLowerCase());
  if(!exists){
    const op = document.createElement('option');
    op.value = label;
    op.textContent = label;
    select.appendChild(op);
  }
}

export default function AddFlightModal({ open, onClose }) {
  const modalRef = useRef(null);

  // cerrar con ESC
  useEffect(() => {
    function onKey(e){ if(e.key === "Escape") onClose?.(); }
    if(open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if(!open) return null;

  function handleBackdrop(e){
    if(e.target.dataset.close === "true") onClose?.();
  }

  function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const get = (id) => form.querySelector(`#${id}`)?.value?.trim();

    const f = {
      id: Date.now(),
      origin:      get('af_origin'),
      destination: get('af_destination'),
      date:        get('af_date'),
      airline:     get('af_airline') || 'AnSolet Air',
      flightNo:    get('af_flightNo'),
      price:       parseInt(get('af_price') || '0', 10) || 0,
      duration:    get('af_duration'),
      stops:       get('af_stops'),
    };

    if(!f.origin || !f.destination || !f.date || !f.flightNo || !f.duration || !f.stops){
      alert('Completá todos los campos obligatorios.');
      return;
    }

    // guardar en localStorage
    let flights = [];
    try { flights = JSON.parse(localStorage.getItem('flights') || '[]'); } catch {}
    flights.push(f);
    localStorage.setItem('flights', JSON.stringify(flights));

    // actualizar selects del buscador si existen en el DOM
    ensureOption(document.querySelector('#origen'),  f.origin);
    ensureOption(document.querySelector('#destino'), f.destination);

    alert('✅ Vuelo agregado');
    form.reset();
    onClose?.();
  }

  return (
    <div className="modal is-open" aria-hidden="false" ref={modalRef} onClick={handleBackdrop}>
      <div className="modal__backdrop" data-close="true"></div>

      <section className="auth-card" role="dialog" aria-modal="true" aria-labelledby="addFlightTitle">
        <button className="auth-card__close" aria-label="Cerrar" data-close="true" onClick={onClose}>×</button>
        <h2 id="addFlightTitle">Añadir vuelo</h2>

        <form id="addFlightForm" className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-grid">
            <label className="auth-field"><span>Origen</span>
              <input type="text" id="af_origin" placeholder="Ej: Córdoba (COR)" required />
            </label>
            <label className="auth-field"><span>Destino</span>
              <input type="text" id="af_destination" placeholder="Ej: París (CDG)" required />
            </label>
            <label className="auth-field"><span>Fecha (salida)</span>
              <input type="date" id="af_date" required />
            </label>
            <label className="auth-field"><span>Aerolínea</span>
              <input type="text" id="af_airline" placeholder="AnSolet Air" required />
            </label>
            <label className="auth-field"><span>Número de vuelo</span>
              <input type="text" id="af_flightNo" placeholder="AS 401" required />
            </label>
            <label className="auth-field"><span>Precio (USD)</span>
              <input type="number" id="af_price" min="0" step="1" placeholder="1299" required />
            </label>
            <label className="auth-field"><span>Duración</span>
              <input type="text" id="af_duration" placeholder="16h 10m" required />
            </label>
            <label className="auth-field"><span>Escalas</span>
              <input type="text" id="af_stops" placeholder="1 escala / directo" required />
            </label>
          </div>

          <button type="submit" className="btn btn-primary full btn-yellow" style={{marginTop:'.5rem'}}>Guardar vuelo</button>
        </form>
      </section>
    </div>
  );
}
