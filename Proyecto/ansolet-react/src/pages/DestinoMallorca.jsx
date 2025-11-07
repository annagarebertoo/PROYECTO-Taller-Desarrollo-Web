// src/pages/DestinoMaldivas.jsx
import DestinationPage from "../components/DestinationPage";
import "./Destinos.css";
import "../index.css";

export default function DestinoMallorca() {
  return (
    <DestinationPage
      config={{
        slug: "maldivas",
        title: "Maldivas",
        priceChip: "Desde US$ 2.599",
        bestTimeChip: "Mejor época: Dic–Abr",
        heroImage: "/imagenes/Islas-Maldivas-1.jpg",
        about: {
          heading: "¿Por qué elegir Maldivas?",
          paragraphs: [
            "Aguas turquesa, arrecifes de coral y villas sobre el mar hacen de Maldivas un destino soñado.",
            "Ideal para lunas de miel, relax y snorkel. Nuestros paquetes incluyen vuelos, hotel y traslados en lancha o hidroavión."
          ]
        },
        gallery: [
          "/imagenes/maldivasextra1.jpeg",
          "/imagenes/maldivasextra2.jpg",
          "/imagenes/maldivasextra3.jpg"
        ],
        highlights: [
          "Snorkel safari en arrecifes (tortugas y peces multicolor).",
          "Cena romántica en la playa.",
          "Paseo en hidroavión sobre atolones."
        ],
        hotels: [
          "<strong>Soneva Jani – Overwater Villas</strong> · 5★",
          "<strong>Riu Palace Maldivas</strong> · 5★",
          "<strong>Sun Siyam Iru Fushi</strong> · 5★"
        ],
        sidebar: {
          datos: [
            "Moneda: Rufiyaa (aceptan USD en resorts).",
            "Visado: exención turística para estancias cortas.",
            "Traslados: lancha rápida o hidroavión.",
            "Clima: tropical; temporada seca Dic–Abr."
          ],
          incluye: [
            "Traslado aeropuerto ↔ hotel.",
            "Excursión snorkel safari.",
            "Seguro de viaje."
          ]
        },
        faq: [
          { q: "¿Cuántas noches recomiendan?", a: "Entre 5 y 7 noches es ideal para combinar relax y actividades." },
          { q: "¿Conviene media pensión o all inclusive?", a: "En islas privadas suele convenir incluir comidas; depende del hotel." },
          { q: "¿Se necesita certificado de vacunas?", a: "No para turistas de corta estadía; recomendamos seguro de viaje." }
        ]
      }}
    />
  );
}