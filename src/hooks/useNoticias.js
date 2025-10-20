import { useState, useEffect } from 'react'

const MOCK_NOTICIAS = [
  {
    id: 1,
    titulo: "Bitcoin alcanza nuevo máximo histórico de $75,000",
    descripcion: "La criptomoneda líder continúa su rally alcista impulsada por la adopción institucional y las expectativas del ETF.",
    fecha: "2025-10-20T10:30:00Z",
    moneda: "BTC",
    imagen: null,
    contenido: "Bitcoin ha superado la barrera de los $75,000 por primera vez en su historia..."
  },
  {
    id: 2,
    titulo: "Ethereum 2.0 completa su actualización más importante",
    descripcion: "La red Ethereum implementa mejoras significativas en escalabilidad y eficiencia energética.",
    fecha: "2025-10-19T15:45:00Z",
    moneda: "ETH",
    imagen: null,
    contenido: "La actualización de Ethereum 2.0 marca un hito importante en el desarrollo..."
  },
  {
    id: 3,
    titulo: "Cardano lanza nueva funcionalidad DeFi",
    descripcion: "La blockchain de Cardano introduce contratos inteligentes avanzados para finanzas descentralizadas.",
    fecha: "2025-10-18T08:20:00Z",
    moneda: "ADA",
    imagen: null,
    contenido: "Cardano expande su ecosistema DeFi con nuevas características..."
  },
  {
    id: 4,
    titulo: "Regulación crypto: Nuevas directivas europeas",
    descripcion: "La Unión Europea establece un marco regulatorio más claro para las criptomonedas.",
    fecha: "2025-10-17T12:15:00Z",
    moneda: "General",
    imagen: null,
    contenido: "Las nuevas regulaciones europeas buscan proporcionar claridad..."
  },
  {
    id: 5,
    titulo: "Solana supera expectativas en velocidad de transacciones",
    descripcion: "La red Solana procesa más de 50,000 transacciones por segundo en pruebas recientes.",
    fecha: "2025-10-16T14:30:00Z",
    moneda: "SOL",
    imagen: null,
    contenido: "Solana demuestra su capacidad técnica superior..."
  }
]

function useNoticias() {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filtroMoneda, setFiltroMoneda] = useState('todas')

  useEffect(() => {
    const cargarNoticias = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setNoticias(MOCK_NOTICIAS)
      } catch (err) {
        setError('Error al cargar las noticias')
        console.error('Error en useNoticias:', err)
      } finally {
        setLoading(false)
      }
    }

    cargarNoticias()
  }, [])

  const noticiasFiltradas = noticias.filter(noticia => {
    if (filtroMoneda === 'todas') return true
    return noticia.moneda.toLowerCase() === filtroMoneda.toLowerCase()
  })

  const obtenerNoticiaPorId = (id) => {
    return noticias.find(noticia => noticia.id === parseInt(id))
  }

  const cambiarFiltroMoneda = (nuevaMoneda) => {
    setFiltroMoneda(nuevaMoneda)
  }

  const monedasDisponibles = [...new Set(noticias.map(n => n.moneda))]

  return {
    noticias: noticiasFiltradas,
    loading,
    error,
    filtroMoneda,
    obtenerNoticiaPorId,
    cambiarFiltroMoneda,
    monedasDisponibles,
    totalNoticias: noticias.length
  }
}

export default useNoticias