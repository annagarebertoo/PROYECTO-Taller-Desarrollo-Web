// src/components/PaqueteSidebar.jsx
export default function PaqueteSidebar({ cart, total, fmt }) {
  return (
    <aside className="card-ghost cart" aria-label="Resumen del paquete">
      <h3>Tu carrito</h3>
      <hr/>
      <div>
        <div><strong>Hotel</strong></div>
        <div className={cart.hotel ? '' : 'empty'}>
          {cart.hotel ? `${cart.hotel.name} (${cart.hotel.dst}) — ${fmt(cart.hotel.price)}` : '—'}
        </div>

        <div style={{marginTop:".6rem"}}><strong>Traslados</strong></div>
        <div className={cart.transfer ? '' : 'empty'}>
          {cart.transfer ? `${cart.transfer.name} — ${fmt(cart.transfer.price)}` : '—'}
        </div>

        <div style={{marginTop:".6rem"}}><strong>Experiencias</strong></div>
        {cart.exp.length ? (
          <ul>{cart.exp.map(x => <li key={x.id}>{x.name} — {fmt(x.price)}</li>)}</ul>
        ) : (
          <div className="empty">—</div>
        )}
      </div>

      <div className="total-row">
        <span>Total</span>
        <span>{fmt(total)}</span>
      </div>

      <a href="#" className="btn-contact" onClick={(e)=>e.preventDefault()}>
        Contactar con un asesor
      </a>
    </aside>
  );
}
