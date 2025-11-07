// src/pages/DestinoEgipto.jsx
import DestinationPage from "../components/DestinationPage";
import "./Destinos.css";
import "../index.css";

export default function DestinoEgipto() {
  return (
    <DestinationPage
      config={{
        slug: "egipto",
        title: "Egipto",
        priceChip: "Desde US$ 1.699",
        bestTimeChip: "Mejor época: Oct–Abr",
        heroImage: "/imagenes/egyptian-pyramids-3.jpg",
        about: {
          heading: "¿Por qué elegir Egipto?",
          paragraphs: [
            "Historia milenaria a orillas del Nilo: pirámides, templos y tumbas que aún maravillan.",
            "Entre El Cairo vibrante, cruceros por el Nilo y oasis del desierto, Egipto ofrece una experiencia cultural única, gastronomía especiada y mercados tradicionales como Khan el-Khalili."
          ]
        },
        gallery: [
          "/imagenes/egiptoextra1.png",
          "/imagenes/egiptoextra2.png",
          "/imagenes/egiptoextra3.jpg"
        ],
        highlights: [
          "Complejo de Giza y la Esfinge.",
          "Templos de Luxor y Karnak; Valle de los Reyes.",
          "Crucero por el Nilo entre Asuán y Luxor.",
          "Abu Simbel al amanecer.",
          "Museo Egipcio / GEM y bazares de El Cairo."
        ],
        hotels: [
          "<strong>Marriott Mena House, Cairo</strong> · 5★",
          "<strong>Sofitel Legend Old Cataract, Aswan</strong> · 5★",
          "<strong>Steigenberger Nile Palace, Luxor</strong> · 5★"
        ],
        sidebar: {
          datos: [
            "Moneda: Libra egipcia (EGP).",
            "Transporte: vuelos internos, trenes y servicios privados para templos.",
            "Conexiones: aeropuertos CAI (El Cairo), HRG (Hurghada), SSH (Sharm el-Sheij).",
            "Clima: desértico; días templados a calurosos y noches frescas en invierno."
          ],
          incluye: [
            "Traslado aeropuerto ↔ hotel y guía en español.",
            "Crucero por el Nilo con excursiones (opcional).",
            "Entradas a complejos arqueológicos clave y seguro de viaje."
          ]
        },
        faq: [
          { q: "¿Cuántas noches recomiendan?", a: "Entre 7 y 10 noches para El Cairo + crucero por el Nilo + Luxor/Asuán." },
          { q: "¿Hace falta guía?", a: "No es obligatorio, pero suma mucho contexto histórico y logística en templos." },
          { q: "¿Código de vestimenta en templos y mezquitas?", a: "Hombros y rodillas cubiertos; respetar indicaciones locales." },
          { q: "¿Conviene combinar con Mar Rojo?", a: "Sí, 2–3 noches en Hurghada o Sharm para snorkel y relax." }
        ]
      }}
    />
  );
}
