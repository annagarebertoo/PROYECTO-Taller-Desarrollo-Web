import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Componentes comunes
import Header from './components/Header'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Vuelos from './pages/Vuelos'
import Paquete from './pages/Paquete'
import NotFound from './pages/NotFound'

// Modales (nuevos componentes)
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'

export default function App() {
  // Estados para abrir/cerrar los modales
  const [loginOpen, setLoginOpen] = useState(false)
  const [regOpen, setRegOpen] = useState(false)

  return (
    <>
      {/* Header recibe las funciones para abrir los modales */}
      <Header
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={() => setRegOpen(true)}
      />

      {/* Rutas del sitio */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/vuelos" element={<Vuelos />} />
        <Route path="/paquete" element={<Paquete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* Modales (se montan solo si están abiertos) */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <RegisterModal open={regOpen} onClose={() => setRegOpen(false)} />
    </>
  )
}
