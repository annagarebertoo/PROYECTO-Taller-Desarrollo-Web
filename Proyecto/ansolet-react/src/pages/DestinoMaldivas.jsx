// src/pages/DestinoMaldivas.jsx
import { Link } from "react-router-dom";
import "./Destinos.css";      // usa el mismo css de destinos (lo ampliamos abajo)
import "../index.css";        // tu global, por si usa variables/btns

export default function DestinoMaldivas() {
  return (
    // Forzamos fondo blanco (se estiliza en Destinos.css con .page-destino)
    <main className="page-destino">
      <div className="container">
        {/* Migas */}
        <nav className="breadcrumb">
          <Link to="/destinos">Destinos</Link> <span>›</span> <span>Maldivas</span>
        </nav>

        {/* Hero */}
        <section className="dest-hero" aria-label="Maldivas">
          <img src="/imagenes/Islas-Maldivas-1.jpg" alt="Maldivas, villas sobre el mar" />
          <div className="dest-hero__content">
            <h1>Maldivas</h1>
            <span className="chip">Desde US$ 2.599</span>
            <span className="chip">Mejor época: Dic–Abr</span>

            <div className="cta-row">
              <Link className="btn btn-primary" to="/paquete">Armar mi paquete</Link>
              <a className="btn btn-ghost" href="#faq">Dudas frecuentes</a>
            </div>
          </div>
        </section>

        {/* Grid principal */}
        <section className="dest-sect dest-grid">
          <article className="card">
            <div className="card__body">
              <h3>¿Por qué elegir Maldivas?</h3>
              <p>
                Aguas turquesa, arrecifes de coral y villas sobre el mar hacen de Maldivas un destino soñado.
                Ideal para lunas de miel, relax y snorkel. Nuestros paquetes incluyen vuelos, hotel y
                traslados en lancha o hidroavión.
              </p>

              <div className="gallery" aria-label="Galería">
                <img src="/imagenes/maldivasextra1.jpeg" alt="Vista aérea de villas" />
                <img src="/imagenes/maldivasextra2.jpg" alt="Calita turquesa" />
                <img src="/imagenes/maldivasextra3.jpg" alt="Atardecer sobre el mar" />
              </div>

              <h3 style={{ marginTop: 14 }}>Lo imperdible</h3>
              <ul className="list">
                <li>Snorkel safari en arrecifes (tortugas y peces multicolor).</li>
                <li>Cena romántica en la playa.</li>
                <li>Paseo en hidroavión sobre atolones.</li>
              </ul>

              <h3 style={{ marginTop: 14 }}>Hoteles sugeridos</h3>
              <ul className="list">
                <li><strong>Soneva Jani – Overwater Villas</strong> · 5★</li>
                <li><strong>Riu Palace Maldivas</strong> · 5★</li>
                <li><strong>Sun Siyam Iru Fushi</strong> · 5★</li>
              </ul>
            </div>
          </article>

          <aside className="card">
            <div className="card__body">
              <h3>Datos útiles</h3>
              <ul className="list">
                <li>Moneda: Rufiyaa (aceptan USD en resorts).</li>
                <li>Visado: exención turística para estancias cortas.</li>
                <li>Traslados: lancha rápida o hidroavión.</li>
                <li>Clima: tropical; temporada seca Dic–Abr.</li>
              </ul>

              <hr style={{ border: 0, borderTop: "1px solid #f0e6f3", margin: "12px 0" }} />
              <h3>Incluí en tu paquete</h3>
              <ul className="list">
                <li>Traslado aeropuerto ↔ hotel.</li>
                <li>Excursión snorkel safari.</li>
                <li>Seguro de viaje.</li>
              </ul>

              <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                <Link className="btn btn-primary" to="/paquete">Elegir hotel y vuelos</Link>
                <Link className="btn btn-ghost" to="/paquete">Ver traslados y excursiones</Link>
              </div>
            </div>
          </aside>
        </section>

        {/* FAQ */}
        <section id="faq" className="dest-sect">
          <div className="card">
            <div className="card__body">
              <h3>Preguntas frecuentes</h3>
              <details><summary>¿Cuántas noches recomiendan?</summary><p>Entre 5 y 7 noches es ideal para combinar relax y actividades.</p></details>
              <details><summary>¿Conviene media pensión o all inclusive?</summary><p>En islas privadas suele convenir incluir comidas; depende del hotel.</p></details>
              <details><summary>¿Se necesita certificado de vacunas?</summary><p>No para turistas de corta estadía; recomendamos seguro de viaje.</p></details>
            </div>
          </div>
        </section>

        {/* Llamado a iniciar sesión / registrar */}
        <section className="dest-sect">
          <div className="card signin-card">
            <div className="card__body">
              <h3>¿Ya tenés cuenta?</h3>
              <p>Iniciá sesión para <strong>guardar</strong> este destino y recibir <strong>alertas</strong> de precio.</p>
              <div className="signin-actions">
                {/* Si tus modales usan context/estado, podés dispararlos desde acá */}
                <button className="btn btn-login" type="button" onClick={() => document.getElementById('loginModal')?.classList.add('is-open')}>Iniciar sesión</button>
                <button className="btn btn-register" type="button" onClick={() => document.getElementById('registerModal')?.classList.add('is-open')}>Registrarse</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
