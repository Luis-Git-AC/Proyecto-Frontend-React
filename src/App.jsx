import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.css'

import Home from './pages/Home'
import Criptos from './pages/Criptos'
import DetalleNoticia from './pages/DetalleNoticia'
import Portfolio from './pages/Portfolio'

import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criptos" element={<Criptos />} />
          <Route path="/noticia/:id" element={<DetalleNoticia />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App