import { useContext } from 'react'
import PortfolioContext from './PortfolioContext'

export default function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio debe usarse dentro de un PortfolioProvider')
  }
  return context
}
