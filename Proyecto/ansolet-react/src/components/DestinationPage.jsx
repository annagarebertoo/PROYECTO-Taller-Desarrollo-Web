// src/components/DestinationPage.jsx
import { Link } from "react-router-dom";
import "../index.css";      // global
import "../pages/Destinos.css"; // estilos de destinos

export default function DestinationPage({ config }) {
  const {
    title,
    priceChip,
    bestTimeChip,
    heroImage,
    breadcrumbBack = "/destinos",
    about = { heading: "", paragraphs: [] },
    gallery = [],
    highlights = [],
    hotels = [],
    sidebar = { datos: [], incluye: [] },
    faq = []
  } = config;

  return (
    <main className="page-destino">
      <div className="container">
        {/* Migas */}
        <nav className="breadcrumb">
          <Link to={breadcrumbBack}>Destinos</Link> <span>›</span> <span>{title}</span>
        </nav>

        {/* Hero */}
        <section className="dest-hero" aria-label={title}>
          <img src={heroImage} alt={`${title}, imagen principal`} />
          <div className="dest-hero__content">
            <h1>{title}</h1>
            {priceChip && <span className="chip">{priceChip}</span>}
            {bestTimeChip && <span className="chip">{bestTimeChip}</span>}
            <div className="cta-row">
              <Link className="btn btn-primary" to="/paquete">Armar mi paquete</Link>
              <a className="btn btn-ghost" href="#faq">Dudas frecuentes</a>
            </div>
          </div>
        </section>

        {/* Cuerpo */}
        <section className="dest-sect dest-grid">
          <article className="card">
            <div className="card__body">
              {about.heading && <h3>{about.heading}</h3>}
              {about.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}

              {!!gallery.length && (
                <div className="gallery" aria-label="Galería">
                  {gallery.map((src, i) => (
                    <img key={i} src={src} alt={`${title} ${i + 1}`} />
                  ))}
                </div>
              )}

              {!!highlights.length && (
                <>
                  <h3 style={{ marginTop: 14 }}>Lo imperdible</h3>
                  <ul className="list">
                    {highlights.map((txt, i) => <li key={i} dangerouslySetInnerHTML={{ __html: txt }} />)}
                  </ul>
                </>
              )}

              {!!hotels.length && (
                <>
                  <h3 style={{ marginTop: 14 }}>Hoteles sugeridos</h3>
                  <ul className="list">
                    {hotels.map((txt, i) => <li key={i} dangerouslySetInnerHTML={{ __html: txt }} />)}
                  </ul>
                </>
              )}
            </div>
          </article>

          <aside className="card">
            <div className="card__body">
              {!!sidebar.datos.length && (
                <>
                  <h3>Datos útiles</h3>
                  <ul className="list">
                    {sidebar.datos.map((txt, i) => <li key={i} dangerouslySetInnerHTML={{ __html: txt }} />)}
                  </ul>
                </>
              )}

              {!!sidebar.incluye.length && (
                <>
                  <hr style={{ border: 0, borderTop: "1px solid #f0e6f3", margin: "12px 0" }} />
                  <h3>Incluí en tu paquete</h3>
                  <ul className="list">
                    {sidebar.incluye.map((txt, i) => <li key={i} dangerouslySetInnerHTML={{ __html: txt }} />)}
                  </ul>
                </>
              )}

              <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                <Link className="btn btn-primary" to="/paquete">Elegir hotel y vuelos</Link>
                <Link className="btn btn-ghost" to="/paquete">Ver traslados y excursiones</Link>
              </div>
            </div>
          </aside>
        </section>

        {/* FAQ */}
        {!!faq.length && (
          <section id="faq" className="dest-sect">
            <div className="card">
              <div className="card__body">
                <h3>Preguntas frecuentes</h3>
                {faq.map(({ q, a }, i) => (
                  <details key={i}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Login / registro */}
        <section className="dest-sect">
          <div className="card signin-card">
            <div className="card__body">
              <h3>¿Ya tenés cuenta?</h3>
              <p>Iniciá sesión para <strong>guardar</strong> este destino y recibir <strong>alertas</strong> de precio.</p>
              <div className="signin-actions">
                <button
                  className="btn btn-login"
                  type="button"
                  onClick={() => document.getElementById("loginModal")?.classList.add("is-open")}
                >
                  Iniciar sesión
                </button>
                <button
                  className="btn btn-register"
                  type="button"
                  onClick={() => document.getElementById("registerModal")?.classList.add("is-open")}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
