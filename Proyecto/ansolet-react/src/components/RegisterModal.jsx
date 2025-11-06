import { useEffect, useRef } from "react";

export default function RegisterModal({ open, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function onKey(e){ if(e.key === 'Escape') onClose?.(); }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  function handleClick(e){
    const closer = e.target.closest('[data-close]');
    if (closer) onClose?.();
  }

  function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const p1 = form.querySelector('#pass1')?.value?.trim() || '';
    const p2 = form.querySelector('#pass2')?.value?.trim() || '';
    if (p1.length < 8) { alert('La contraseña debe tener al menos 8 caracteres.'); return; }
    if (p1 !== p2) { alert('Las contraseñas no coinciden.'); return; }
    alert('✅ Cuenta creada (simulado)');
    onClose?.();
  }

  return (
    <div
      ref={modalRef}
      className={`modal ${open ? 'is-open' : ''}`}
      aria-hidden={open ? 'false' : 'true'}
      onClick={handleClick}
    >
      <div className="modal__backdrop" data-close="true"></div>

      <section className="auth-card" role="dialog" aria-modal="true" aria-labelledby="registerTitle">
        <button className="auth-card__close" aria-label="Cerrar" data-close="true">×</button>
        <h2 id="registerTitle">Crear cuenta</h2>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-grid">
            <label className="auth-field"><span>Nombre</span>
              <input type="text" name="nombre" required />
            </label>
            <label className="auth-field"><span>Apellido</span>
              <input type="text" name="apellido" required />
            </label>
            <label className="auth-field"><span>Correo electrónico</span>
              <input type="email" name="email" required />
            </label>
            <label className="auth-field"><span>Teléfono (opcional)</span>
              <input type="tel" name="telefono" />
            </label>
            <label className="auth-field"><span>Contraseña</span>
              <input id="pass1" type="password" minLength={8} required />
            </label>
            <label className="auth-field"><span>Repetir contraseña</span>
              <input id="pass2" type="password" minLength={8} required />
            </label>
          </div>

          <label className="remember" style={{marginTop:'.2rem'}}>
            <input type="checkbox" required />
            <span>Acepto los <a href="#">Términos</a> y la <a href="#">Política de privacidad</a>.</span>
          </label>

          <button type="submit" className="btn btn-primary full btn-yellow" style={{marginTop:'.5rem'}}>
            Crear cuenta
          </button>
        </form>
      </section>
    </div>
  );
}
