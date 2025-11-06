// src/pages/Paquete.jsx
import { useState, useMemo, useEffect  } from "react";
import PaqueteOption from "../components/PaqueteOption";
import PaqueteSidebar from "../components/PaqueteSidebar";
import PaqueteAccordion from "../components/PaqueteAccordion";

export default function Paquete() {
    useEffect(() => {
    const prevBg = {
      image: document.body.style.backgroundImage,
      size: document.body.style.backgroundSize,
      position: document.body.style.backgroundPosition,
      attachment: document.body.style.backgroundAttachment,
      color: document.body.style.backgroundColor,
    };

    document.body.style.backgroundImage = 'url("/imagenes/fondo.png")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = 'transparent';

    return () => {
      document.body.style.backgroundImage = prevBg.image || '';
      document.body.style.backgroundSize = prevBg.size || '';
      document.body.style.backgroundPosition = prevBg.position || '';
      document.body.style.backgroundAttachment = prevBg.attachment || '';
      document.body.style.backgroundColor = prevBg.color || '';
    };
  }, []);
  // Datos originales del HTML
  const hotels = [
    { id:'h1', name:'Soneva Jani – Overwater Villas', dst:'Maldivas',  stars:5, price:1850 },
    { id:'h2', name:'Zafiro Palace Alcudia',          dst:'Mallorca',  stars:5, price:420  },
    { id:'h3', name:'Canaves Oia Suites',             dst:'Santorini', stars:5, price:980  },
    { id:'h4', name:'Marriott Mena House',            dst:'Egipto',    stars:5, price:360  },
  ];
  const transfers = [
    { id:'t1', name:'Shuttle compartido',             price:25  },
    { id:'t2', name:'Auto sedán privado',             price:60  },
    { id:'t3', name:'Minivan (hasta 6 pax)',          price:90  },
    { id:'t4', name:'Servicio premium (auto ejecutivo)', price:120 },
  ];
  const experiences = [
    { id:'e1', name:'Maldivas · Snorkel safari en arrecifes',  price:140 },
    { id:'e2', name:'Mallorca · Cuevas del Drach + concierto', price:65  },
    { id:'e3', name:'Santorini · Atardecer en Oia + cata',     price:110 },
    { id:'e4', name:'Egipto · Pirámides + Esfinge con guía',   price:85  },
  ];

  // Estado del carrito
  const [cart, setCart] = useState({ hotel:null, transfer:null, exp:[] });

  // Helpers
  const fmt = (n) => `US$ ${Number(n || 0).toLocaleString('en-US')}`;

  const addItem = (group, item) => {
    setCart(prev => {
      const c = { ...prev };
      if (group === 'hotel')   c.hotel = item;
      if (group === 'transfer') c.transfer = item;
      if (group === 'exp') {
        if (!c.exp.find(x => x.id === item.id)) c.exp = [...c.exp, item];
      }
      return c;
    });
  };

  const removeItem = (group, item) => {
    setCart(prev => {
      const c = { ...prev };
      if (group === 'hotel')   c.hotel = null;
      if (group === 'transfer') c.transfer = null;
      if (group === 'exp')     c.exp = c.exp.filter(x => x.id !== item.id);
      return c;
    });
  };

  const total = useMemo(() =>
      (cart.hotel?.price || 0) +
      (cart.transfer?.price || 0) +
      cart.exp.reduce((s,x)=> s + (x.price || 0), 0)
    , [cart]);

  return (
    <main className="container pkg-layout">
      {/* === Carrito (sidebar) === */}
      <PaqueteSidebar cart={cart} total={total} fmt={fmt} />

      {/* === Panel de opciones === */}
      <section className="card-ghost options" aria-label="Opciones disponibles">
        <div className="accordion">
<PaqueteAccordion id="accHotels" title="Hoteles" lockedOpen={true}>
  {hotels.map(h => (
    <PaqueteOption key={h.id} item={h} group="hotel" onAdd={addItem} onRemove={removeItem} fmt={fmt}/>
  ))}
</PaqueteAccordion>

<PaqueteAccordion id="accTransfers" title="Traslados" lockedOpen={true}>
  {transfers.map(t => (
    <PaqueteOption key={t.id} item={t} group="transfer" onAdd={addItem} onRemove={removeItem} fmt={fmt}/>
  ))}
</PaqueteAccordion>

<PaqueteAccordion id="accExp" title="Excursiones / Experiencias" lockedOpen={true}>
  {experiences.map(e => (
    <PaqueteOption key={e.id} item={e} group="exp" onAdd={addItem} onRemove={removeItem} fmt={fmt}/>
  ))}
</PaqueteAccordion>

        </div>
      </section>
    </main>
  );
}
