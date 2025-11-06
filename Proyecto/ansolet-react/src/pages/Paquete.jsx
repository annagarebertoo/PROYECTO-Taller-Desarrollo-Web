import { useState } from "react";

export default function Paquete() {
  // Datos originales del HTML
  const hotels = [
    { id:'h1', name:'Soneva Jani – Overwater Villas', dst:'Maldivas', stars:5, price:1850 },
    { id:'h2', name:'Zafiro Palace Alcudia',          dst:'Mallorca',  stars:5, price:420 },
    { id:'h3', name:'Canaves Oia Suites',             dst:'Santorini', stars:5, price:980 },
    { id:'h4', name:'Marriott Mena House',            dst:'Egipto',    stars:5, price:360 },
  ];
  const transfers = [
    { id:'t1', name:'Shuttle compartido', price:25 },
    { id:'t2', name:'Auto sedán privado', price:60 },
    { id:'t3', name:'Minivan (hasta 6 pax)', price:90 },
    { id:'t4', name:'Servicio premium (auto ejecutivo)', price:120 },
  ];
  const experiences = [
    { id:'e1', name:'Maldivas · Snorkel safari en arrecifes', price:140 },
    { id:'e2', name:'Mallorca · Cuevas del Drach + concierto', price:65 },
    { id:'e3', name:'Santorini · Atardecer en Oia + cata', price:110 },
    { id:'e4', name:'Egipto · Pirámides + Esfinge con guía', price:85 },
  ];

  // Estado del carrito
  const [cart, setCart] = useState({ hotel:null, transfer:null, exp:[] });

  // Helpers
  const fmt = (n) => `US$ ${Number(n || 0).toLocaleString('en-US')}`;
  const toggle = (id) => document.getElementById(id)?.classList.toggle('is-open');

  // Handlers de selección
  const selectItem = (group, item, action) => {
    setCart(prev => {
      const newCart = { ...prev };
      if(group === 'hotel'){
        newCart.hotel = action === 'add' ? item : null;
      }
      if(group === 'transfer'){
        newCart.transfer = action === 'add' ? item : null;
      }
      if(group === 'exp'){
        if(action === 'add'){
          if(!newCart.exp.find(x => x.id === item.id)) newCart.exp.push(item);
        } else {
          newCart.exp = newCart.exp.filter(x => x.id !== item.id);
        }
      }
      return newCart;
    });
  };

  const total =
    (cart.hotel?.price || 0) +
    (cart.transfer?.price || 0) +
    cart.exp.reduce((s,x)=> s + (x.price || 0), 0);

  // Render de una "pastilla"
  const Pill = ({ item, group }) => (
    <div className="pill">
      <div>
        <div className="line1">
          {item.name}
          {item.dst && <span className="badge-dst">{item.dst}</span>}
          {item.stars && <> • {'★'.repeat(item.stars)}</>}
        </div>
        <a href="#" className="sub">Más información</a>
      </div>

      <div className="actions">
        {group === 'hotel' ? (
          <>
            <button className="btn-ok" onClick={() => selectItem(group, item, 'add')}>✓</button>
            <button className="btn-x" onClick={() => selectItem(group, item, 'remove')}>×</button>
          </>
        ) : (
          <>
            <button className="btn-add" onClick={() => selectItem(group, item, 'add')}>✓</button>
            <button className="btn-remove" onClick={() => selectItem(group, item, 'remove')}>×</button>
          </>
        )}
      </div>

      <div className="price">{fmt(item.price)}</div>
    </div>
  );

  return (
    <main className="container pkg-layout">
      {/* === Carrito === */}
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

        <a href="#" className="btn-contact">Contactar con un asesor</a>
      </aside>

      {/* === Panel de opciones === */}
      <section className="card-ghost options" aria-label="Opciones disponibles">
        <div className="accordion">
          <article className="acc is-open" id="accHotels">
            <header className="acc__head" onClick={() => toggle('accHotels')}>
              <span>Hoteles</span><span>⌄</span>
            </header>
            <div className="acc__body">
              {hotels.map(h => <Pill key={h.id} item={h} group="hotel"/>)}
            </div>
          </article>

          <article className="acc" id="accTransfers">
            <header className="acc__head" onClick={() => toggle('accTransfers')}>
              <span>Traslados</span><span>⌄</span>
            </header>
            <div className="acc__body">
              {transfers.map(t => <Pill key={t.id} item={t} group="transfer"/>)}
            </div>
          </article>

          <article className="acc" id="accExp">
            <header className="acc__head" onClick={() => toggle('accExp')}>
              <span>Excursiones / Experiencias</span><span>⌄</span>
            </header>
            <div className="acc__body">
              {experiences.map(e => <Pill key={e.id} item={e} group="exp"/>)}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
