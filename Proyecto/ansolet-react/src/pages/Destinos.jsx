// src/pages/Destinos.jsx
import { Link } from "react-router-dom";
import "./Destinos.css";

export default function Destinos() {
  const destinos = [
    {
      nombre: "Maldivas",
      desc: "Villas sobre aguas cristalinas con arrecifes de coral únicos.",
      precio: "2,599",
      imagen: "/imagenes/Islas-Maldivas-1.jpg",
      href: "/destinos/maldivas", // cambiá si no tenés esta ruta aún
    },
    {
      nombre: "Mallorca",
      desc: "Playas cristalinas, paisajes mediterráneos y pueblos llenos de encanto.",
      precio: "1,499",
      imagen: "/imagenes/img.jpg",
      href: "/destinos/mallorca",
    },
    {
      nombre: "París",
      desc: "La ciudad del amor con la Torre Eiffel iluminada y gastronomía excepcional.",
      precio: "2,000",
      imagen: "/imagenes/paris.jpg",
      href: "/destinos/paris",
    },
    {
      nombre: "Egipto",
      desc: "Tierra del Nilo y las pirámides; un destino lleno de historia y misterio.",
      precio: "2,199",
      imagen: "/imagenes/egyptian-pyramids-3.jpg",
      href: "/destinos/egipto",
    },
    {
      nombre: "Santorini",
      desc: "Cúpulas azules, atardeceres inolvidables y callejuelas blancas junto al Egeo.",
      precio: "1,799",
      imagen: "/imagenes/11.jpg",
      href: "/destinos/santorini",
    },
    {
      nombre: "Nueva York",
      desc: "La ciudad que nunca duerme: rascacielos, luces vibrantes y energía única.",
      precio: "1,999",
      imagen: "/imagenes/nuevayork.jpg",
      href: "/destinos/nuevayork",
    },
  ];

  return (
    // Wrapper que fuerza fondo blanco SOLO para esta página
    <main className="page-destinos">
      <div className="container destinos">
        <h1>Elegí tu próximo destino</h1>

        <section className="destinos-grid" aria-label="Destinos disponibles">
          {destinos.map((d) => (
            <article className="d-card" key={d.nombre}>
              <div className="d-media">
                <img src={d.imagen} alt={d.nombre} />
                <span className="d-badge">Desde ${d.precio}</span>
              </div>

              <div className="d-body">
                <h3 className="d-title">{d.nombre}</h3>
                <p className="d-desc">{d.desc}</p>
              </div>

              <div className="d-actions">
                {/* Si aún no tenés esas rutas, podés usar <a href="#">Explorar</a> */}
                <Link className="btn-explorar" to={d.href}>
                  Explorar
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
