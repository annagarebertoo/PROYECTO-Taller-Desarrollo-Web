import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function Header({ onOpenLogin, onOpenRegister }) {
  const [open, setOpen] = useState(false)
  const dropBtnRef = useRef(null)
  const dropMenuRef = useRef(null)

  // Cerrar dropdown al hacer click afuera o con ESC
  useEffect(() => {
    function onDocClick(e) {
      if (!dropMenuRef.current || !dropBtnRef.current) return
      const clickedInside =
        dropMenuRef.current.contains(e.target) ||
        dropBtnRef.current.contains(e.target)
      if (!clickedInside) setOpen(false)
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    window.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('click', onDocClick)
      window.removeEventListener('keydown', onEsc)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="container nav">

        {/* Logo pegado a la izquierda */}
        <a className="brand" href="/" aria-label="AnSolet - Inicio">
          <img src="/imagenes/ansolet.png" alt="AnSolet" className="logo" />
        </a>

        {/* Menú principal */}
        <nav className="main-nav" aria-label="Principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/destinos">Destinos</NavLink>
          <NavLink to="/paquete">Tu Paquete</NavLink>
          <a href="/ayuda">Ayuda</a>

          {/* Dropdown Agregar productos */}
          <div className="nav-dropdown">
            <button
              ref={dropBtnRef}
              className="nav-drop__btn"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : 'false'}
              onClick={() => setOpen(v => !v)}
            >
              Agregar productos ▾
            </button>

            <div
              ref={dropMenuRef}
              className={`nav-drop__menu ${open ? 'is-open' : ''}`}
              aria-hidden={open ? 'false' : 'true'}
              role="menu"
            >
              <a
                href="#"
                role="menuitem"
                data-open="modalAddFlight"
                onClick={(e)=>{ e.preventDefault(); setOpen(false); window.dispatchEvent(new CustomEvent('open:addFlight')); }}
              >Añadir vuelo</a>

              <a
                href="#"
                role="menuitem"
                data-open="modalAddDestination"
                onClick={(e)=>{ e.preventDefault(); setOpen(false); window.dispatchEvent(new CustomEvent('open:addDestination')); }}
              >Añadir destino</a>
            </div>
          </div>
        </nav>

        {/* Lado derecho */}
        <div className="right-nav">
          <span className="minor lang-chip">Idioma ES | USD</span>

          {/* Botones que abren modales */}
          <a
            className="btn btn-login"
            href="#"
            onClick={(e) => { e.preventDefault(); onOpenLogin?.(); }}
          >
            Iniciar sesión
          </a>

          <a
            className="btn btn-register"
            href="#"
            onClick={(e) => { e.preventDefault(); onOpenRegister?.(); }}
          >
            Registrarse
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

