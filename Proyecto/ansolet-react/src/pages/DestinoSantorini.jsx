// src/pages/DestinoSantorini.jsx
import DestinationPage from "../components/DestinationPage";
import "./Destinos.css";
import "../index.css";

export default function DestinoSantorini() {
  return (
    <DestinationPage
      config={{
        slug: "santorini",
        title: "Santorini",
        priceChip: "Desde US$ 1.399",
        bestTimeChip: "Mejor época: May–Oct",
        heroImage: "/imagenes/11.jpg",
        about: {
          heading: "¿Por qué elegir Santorini?",
          paragraphs: [
            "Icono de las Cícladas: casas blancas, cúpulas azules y vistas a la caldera volcánica.",
            "Perfecta para atardeceres inolvidables, playas únicas (roja y negra), gastronomía mediterránea y caminatas escénicas entre Fira y Oia."
          ]
        },
        gallery: [
          "/imagenes/santoriniextra1.jpg",
          "/imagenes/santoriniextra2.jpg",
          "/imagenes/santoriniextra3.jpg"
        ],
        highlights: [
          "Puesta de sol en Oia y paseo por Fira.",
          "Camino Fira → Oia bordeando la caldera.",
          "Playas Red Beach, Perissa (arena negra) y Kamari.",
          "Sitio arqueológico de Akrotiri y bodegas locales (vino Assyrtiko).",
          "Excursión en barco a Nea Kameni y aguas termales."
        ],
        hotels: [
          "<strong>Canaves Oia Suites</strong> · 5★",
          "<strong>Katikies Santorini</strong> · 5★",
          "<strong>Grace Hotel Santorini</strong> · 5★"
        ],
        sidebar: {
          datos: [
            "Moneda: Euro.",
            "Transporte: buses locales; muy popular el ATV/quad y autos.",
            "Conexiones: ferry desde Atenas y otras islas; aeropuerto JTR.",
            "Clima: veranos secos y calurosos; primaveras y otoños templados."
          ],
          incluye: [
            "Traslado puerto/aeropuerto ↔ hotel.",
            "Excursión en barco por la caldera (opcional) y degustación de vinos.",
            "Seguro de viaje."
          ]
        },
        faq: [
          { q: "¿Cuántas noches recomiendan?", a: "Entre 3 y 5 noches para playas, bodegas y excursión en barco." },
          { q: "¿Dónde conviene alojarse?", a: "Oia y Imerovigli para vistas; Fira para estar bien conectado y con más movida." },
          { q: "¿Hace falta reservar con mucha anticipación?", a: "En temporada alta (jun–sep) sí: hoteles, restaurantes y excursiones." }
        ]
      }}
    />
  );
}
