import Header from './components/Header'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Paquete from './pages/Paquete'
import Vuelos from './pages/Vuelos'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/paquete" element={<Paquete />} />
        {/* Resultado de búsqueda de vuelos */}
        <Route path="/vuelos" element={<Vuelos />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
