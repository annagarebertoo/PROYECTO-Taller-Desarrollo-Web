// src/pages/DestinoMallorca.jsx
import DestinationPage from "../components/DestinationPage";
import "./Destinos.css";
import "../index.css";

export default function DestinoMallorca() {
  return (
    <DestinationPage
      config={{
        slug: "mallorca",
        title: "Mallorca",
        priceChip: "Desde US$ 1.499",
        bestTimeChip: "Mejor época: May–Sep",
        heroImage: "/imagenes/img.jpg",
        about: {
          heading: "¿Por qué elegir Mallorca?",
          paragraphs: [
            "Mallorca combina calas de agua turquesa, pueblos de piedra y naturaleza en la Serra de Tramuntana.",
            "Es ideal para quienes buscan playas, gastronomía mediterránea y rutas escénicas en auto o bicicleta. Palma sorprende con su catedral gótica frente al mar."
          ]
        },
        gallery: [
          "/imagenes/mallorcaextra1.jpeg",
          "/imagenes/mallorcaextra2.jpg",
          "/imagenes/mallorcaextra3.jpg"
        ],
        highlights: [
          "Visitar las Cuevas del Drach y su concierto subterráneo.",
          "Recorrer la Serra de Tramuntana: Valldemossa, Deià y Sóller.",
          "Calas como Caló des Moro y Cala Varques.",
          "Paseo por el casco histórico de Palma y su catedral."
        ],
        hotels: [
          "<strong>Zafiro Palace Alcudia</strong> · 5★",
          "<strong>Hotel Nixe Palace</strong> · 5★",
          "<strong>Iberostar Selection Playa de Palma</strong> · 5★"
        ],
        sidebar: {
          datos: [
            "Moneda: Euro.",
            "Transporte: auto de alquiler recomendado para explorar calas.",
            "Conexiones: vuelos directos a Palma (PMI) desde principales ciudades europeas.",
            "Clima: veranos cálidos y secos; primavera/otoño templados."
          ],
          incluye: [
            "Traslado aeropuerto ↔ hotel o auto de alquiler.",
            "Entrada a Cuevas del Drach (opcional).",
            "Seguro de viaje."
          ]
        },
        faq: [
          { q: "¿Cuántas noches recomiendan?", a: "Entre 4 y 7 noches para combinar Palma, Tramuntana y calas." },
          { q: "¿Hace falta auto?", a: "No es imprescindible en Palma, pero sí para llegar cómodo a calas y pueblos." },
          { q: "¿Las calas son de acceso libre?", a: "La mayoría sí, con caminatas cortas; llevá calzado cómodo y agua." }
        ]
      }}
    />
  );
}
