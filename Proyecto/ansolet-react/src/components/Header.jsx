import { NavLink } from 'react-router-dom'

function Header() {
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
          <a className="btn btn-login" href="#">Iniciar sesión</a>
          <a className="btn btn-register" href="#">Registrarse</a>
        </div>
      </div>
    </header>
  );
}
export default Header;
