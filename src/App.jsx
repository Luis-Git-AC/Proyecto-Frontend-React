import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.css'

import Home from './pages/Home'
import Criptos from './pages/Criptos'
import Portfolio from './pages/Portfolio'

import RootLayout from './components/RootLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="criptos" element={<Criptos />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App