function Offers() {
  return (
    <section className="offers">
      <div className="container offers-grid">

        <aside className="specials-card">
          <h2>Ofertas especiales</h2>
          <ul className="perks-list">
            <li>💳 Pagos Seguros</li>
            <li>🕒 Cambios flexibles</li>
            <li>🕘 Atención 24/7</li>
          </ul>
        </aside>

        <article className="offer">
          <span className="badge">-30%</span>
          <h4>Pack Cancún</h4>
          <p>7 noches</p>
          <a href="#" className="btn btn-offer">Ver oferta</a>
        </article>

        <article className="offer">
          <span className="badge">-20%</span>
          <h4>Pack Bariloche</h4>
          <p>5 noches</p>
          <a href="#" className="btn btn-offer">Ver oferta</a>
        </article>

      </div>
    </section>
  );
}
export default Offers;
