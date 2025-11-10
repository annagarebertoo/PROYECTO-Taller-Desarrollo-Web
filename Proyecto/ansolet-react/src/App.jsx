import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Componentes comunes
import Header from './components/Header'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import DestinoMaldivas from "./pages/DestinoMaldivas";
import DestinoParis from "./pages/DestinoParis";
import DestinoEgipto from "./pages/DestinoEgipto";
import DestinoMallorca from "./pages/DestinoMallorca";
import DestinoNuevaYork from "./pages/DestinoNuevaYork";
import DestinoSantorini from "./pages/DestinoSantorini";
import Vuelos from './pages/Vuelos'
import Paquete from './pages/Paquete'
import NotFound from './pages/NotFound'

// Modales de auth
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'

// Modales de “Agregar productos”
import AddFlightModal from './components/AddFlightModal'
import AddDestinationModal from './components/AddDestinationModal'

export default function App() {
  // ===== Auth modals =====
  const [loginOpen, setLoginOpen] = useState(false)
  const [regOpen, setRegOpen] = useState(false)

  // ===== “Agregar productos” modals =====
  const [addFlightOpen, setAddFlightOpen] = useState(false)
  const [addDestOpen, setAddDestOpen] = useState(false)

 
  useEffect(() => {
    const openFlight = () => setAddFlightOpen(true)
    const openDest   = () => setAddDestOpen(true)

    window.addEventListener('open:addFlight', openFlight)
    window.addEventListener('open:addDestination', openDest)

    return () => {
      window.removeEventListener('open:addFlight', openFlight)
      window.removeEventListener('open:addDestination', openDest)
    }
  }, [])

  return (
    <>
      {/* handlers de login/register */}
      <Header
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={() => setRegOpen(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/maldivas" element={<DestinoMaldivas />} />
        <Route path="/destinos/paris" element={<DestinoParis />} />
        <Route path="/destinos/egipto" element={<DestinoEgipto />} />
        <Route path="/destinos/mallorca" element={<DestinoMallorca />} />
        <Route path="/destinos/nuevayork" element={<DestinoNuevaYork />} />
        <Route path="/destinos/santorini" element={<DestinoSantorini />} />
        <Route path="/vuelos" element={<Vuelos />} />
        <Route path="/paquete" element={<Paquete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* Modales de auth */}
      <LoginModal   open={loginOpen} onClose={() => setLoginOpen(false)} />
      <RegisterModal open={regOpen}  onClose={() => setRegOpen(false)} />

      {/* Modales de Agregar productos */}
      <AddFlightModal      open={addFlightOpen} onClose={() => setAddFlightOpen(false)} />
      <AddDestinationModal open={addDestOpen}  onClose={() => setAddDestOpen(false)} />
    </>
  )
}
