// src/pages/DestinoParis.jsx
import DestinationPage from "../components/DestinationPage";
import "./Destinos.css";
import "../index.css";

export default function DestinoParis() {
  return (
    <DestinationPage
      config={{
        slug: "paris",
        title: "París",
        priceChip: "Desde US$ 1.299",
        bestTimeChip: "Mejor época: Abr–Jun, Sep–Oct",
        heroImage: "/imagenes/paris.jpg",
        about: {
          heading: "¿Por qué elegir París?",
          paragraphs: [
            "La “Ville Lumière” combina arte de clase mundial, arquitectura icónica y bistrós con encanto.",
            "Entre paseos por el Sena, museos como el Louvre y barrios bohemios como Montmartre, París invita a caminar, perderse y disfrutar su gastronomía y cafés históricos."
          ]
        },
        gallery: [
          "/imagenes/parisextra1.jpg",
          "/imagenes/parisextra2.jpg",
          "/imagenes/parisextra3.jpg"
        ],
        highlights: [
          "Subir a la Torre Eiffel o admirarla desde Trocadéro.",
          "Museos Louvre y Musée d’Orsay.",
          "Paseo en barco por el Sena y Île de la Cité.",
          "Atardecer en Montmartre y la Basílica del Sacré-Cœur."
        ],
        hotels: [
          "<strong>Le Bristol Paris</strong> · 5★",
          "<strong>Hotel Lutetia</strong> · 5★",
          "<strong>Pullman Paris Tour Eiffel</strong> · 4★"
        ],
        sidebar: {
          datos: [
            "Moneda: Euro.",
            "Transporte: metro y RER conectan toda la ciudad.",
            "Conexiones: aeropuertos CDG y ORY; trenes TGV.",
            "Clima: primaveras templadas; veranos cálidos; inviernos fríos."
          ],
          incluye: [
            "Traslado aeropuerto ↔ hotel o pase de transporte.",
            "Entrada al Louvre o subida Torre Eiffel (opcional).",
            "Seguro de viaje."
          ]
        },
        faq: [
          { q: "¿Cuántas noches recomiendan?", a: "Entre 3 y 5 noches para cubrir lo esencial y una excursión." },
          { q: "¿Conviene comprar el Paris Museum Pass?", a: "Si planeás visitar 2–3 museos por día, suele amortizarse y evita filas." },
          { q: "¿En qué zona conviene alojarse?", a: "Barrios 1–7 para estar cerca de atractivos; 9 y 11 para propuestas trendy." }
        ]
      }}
    />
  );
}
