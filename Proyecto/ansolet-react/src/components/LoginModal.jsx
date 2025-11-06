import { useEffect, useRef } from "react";

export default function LoginModal({ open, onClose }) {
  const modalRef = useRef(null);

  // Cerrar con ESC y bloquear scroll del body cuando está abierto
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

  // Cerrar al clickear backdrop o el botón con data-close
  function handleClick(e){
    const closer = e.target.closest('[data-close]');
    if (closer) onClose?.();
  }

  return (
    <div
      ref={modalRef}
      className={`modal ${open ? 'is-open' : ''}`}
      aria-hidden={open ? 'false' : 'true'}
      onClick={handleClick}
    >
      <div className="modal__backdrop" data-close="true"></div>

      <section className="auth-card" role="dialog" aria-modal="true" aria-labelledby="loginTitle">
        <button className="auth-card__close" aria-label="Cerrar" data-close="true">×</button>
        <h2 id="loginTitle">Iniciar Sesión</h2>

        <form action="#" method="post" className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <label className="auth-field">
            <span>Correo electrónico</span>
            <input type="email" placeholder="tu@correo.com" required />
          </label>

          <label className="auth-field">
            <span>Contraseña</span>
            <input type="password" placeholder="••••••••" required />
          </label>

          <div className="auth-row">
            <label className="remember"><input type="checkbox" /> Recordarme</label>
            <a href="#" className="forgot">Olvidé mi contraseña</a>
          </div>

          <button type="submit" className="btn btn-primary full btn-yellow">Ingresar</button>

          <div className="divider"><span>o continuar con</span></div>

          <div className="social-row">
            <button type="button" className="social-btn" aria-label="Google">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.7-5.5 3.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 4 1.5l2.7-2.6C16.7 3 14.5 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.5 12 20.5c6.9 0 9.2-4.8 8.6-7.9H12z"/>
              </svg>
            </button>
            <button type="button" className="social-btn" aria-label="Apple">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.365 13.2c.032 3.375 2.97 4.5 3.003 4.516-.025.08-.468 1.6-1.543 3.17-.93 1.35-1.89 2.7-3.393 2.73-1.485.03-1.96-.885-3.66-.885-1.7 0-2.22.855-3.615.915-1.455.06-2.56-1.46-3.495-2.805-1.905-2.745-3.36-7.74-1.41-11.115 1.005-1.77 2.805-2.895 4.77-2.925 1.485-.03 2.88 1.005 3.66 1.005.78 0 2.52-1.23 4.26-1.05.725.03 2.76.285 4.065 2.145-.105.065-2.43 1.425-2.37 4.4z" fill="currentColor"/>
              </svg>
            </button>
            <button type="button" className="social-btn" aria-label="Facebook">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1877F2" d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.04H7.9v-2.9h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.76-1.62 1.53v1.85h2.76l-.44 2.9h-2.32V22C18.34 21.2 22 17.08 22 12.06z"/>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
