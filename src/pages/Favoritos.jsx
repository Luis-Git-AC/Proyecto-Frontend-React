import { useMemo } from 'react'
import CoinCard from '../components/CoinCard'
import usePortfolio from '../hooks/usePortfolio'

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 4 : 2
  }).format(value)
}

function Portfolio() {
  const { portfolio, removeCoin, clearPortfolio } = usePortfolio()

  const totalValue = useMemo(() => {
    return portfolio.reduce((acc, coin) => acc + (coin.currentPrice ?? 0), 0)
  }, [portfolio])

  return (
    <div className="page-container portfolio-page">
      <header className="portfolio-header">
        <div>
          <h1>Portfolio</h1>
          <p>Administra tus criptomonedas favoritas y consulta su evolución.</p>
        </div>
        {portfolio.length > 0 && (
          <div className="portfolio-summary">
            <span className="portfolio-total">
              Valor estimado: <strong>{formatCurrency(totalValue)}</strong>
            </span>
            <button type="button" className="portfolio-clear" onClick={clearPortfolio}>
              Vaciar portfolio
            </button>
          </div>
        )}
      </header>

      {portfolio.length === 0 ? (
        <section className="portfolio-empty" role="status">
          <h2>No hay criptomonedas guardadas</h2>
          <p>Visita el listado de criptos y añade tus favoritos para construir tu portfolio.</p>
          <a href="/criptos" className="portfolio-link">
            Ir al listado de criptomonedas
          </a>
        </section>
      ) : (
        <section className="crypto-grid" role="list">
          {portfolio.map((coin) => (
            <CoinCard
              key={coin.id}
              coin={coin}
              isInPortfolio
              onTogglePortfolio={() => removeCoin(coin.id)}
            />
          ))}
        </section>
      )}
    </div>
  )
}

export default Portfolio