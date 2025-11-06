import { NavLink } from 'react-router-dom';

function Header({ onOpenLogin, onOpenRegister }) {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="/">
          <img src="/imagenes/ansolet.png" alt="AnSolet" className="logo" />
        </a>

        <nav className="main-nav" aria-label="Principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/destinos">Destinos</NavLink>
          <NavLink to="/paquete">Tu Paquete</NavLink>
          <a href="/ayuda">Ayuda</a>
        </nav>

        <div className="right-nav">
          <span className="minor">Idioma ES | USD</span>

          {/* Botones que abren los modales */}
          <a
            className="btn btn-login"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenLogin?.(); // Llama a la función pasada desde App.jsx
            }}
          >
            Iniciar sesión
          </a>

          <a
            className="btn btn-register"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenRegister?.(); // Llama a la función pasada desde App.jsx
            }}
          >
            Registrarse
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
