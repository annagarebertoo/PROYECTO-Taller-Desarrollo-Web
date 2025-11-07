// src/components/AddDestinationModal.jsx
import { useEffect } from "react";

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

export default function AddDestinationModal({ open, onClose }){

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
    const name = form.querySelector('#ad_name')?.value.trim();
    const code = (form.querySelector('#ad_code')?.value || '').trim().toUpperCase();
    if(!name){ alert('Completá el nombre del destino.'); return; }

    const label = code ? `${name} (${code})` : name;

    // actualizar select destino si existe
    ensureOption(document.querySelector('#destino'), label);

    alert('✅ Destino agregado');
    form.reset();
    onClose?.();
  }

  return (
    <div className="modal is-open" aria-hidden="false" onClick={handleBackdrop}>
      <div className="modal__backdrop" data-close="true"></div>

      <section className="auth-card" role="dialog" aria-modal="true" aria-labelledby="addDestinationTitle">
        <button className="auth-card__close" aria-label="Cerrar" data-close="true" onClick={onClose}>×</button>
        <h2 id="addDestinationTitle">Añadir destino</h2>

        <form id="addDestinationForm" className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-grid">
            <label className="auth-field"><span>Nombre del destino</span>
              <input type="text" id="ad_name" placeholder="Ej: Roma" required />
            </label>
            <label className="auth-field"><span>Código (IATA)</span>
              <input type="text" id="ad_code" placeholder="Ej: FCO" maxLength={3} />
            </label>
            <label className="auth-field"><span>Precio orientativo (USD)</span>
              <input type="number" id="ad_price" min="0" step="1" placeholder="1200" />
            </label>
            <label className="auth-field"><span>Mejor época</span>
              <input type="text" id="ad_best" placeholder="Abr–Oct" />
            </label>
          </div>

          <button type="submit" className="btn btn-primary full btn-yellow" style={{marginTop:'.5rem'}}>Guardar destino</button>
        </form>
      </section>
    </div>
  );
}
