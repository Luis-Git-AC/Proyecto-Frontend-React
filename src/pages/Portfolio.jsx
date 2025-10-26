import { useMemo } from 'react'
import CoinCard from '../components/CoinCard'
import usePortfolio from '../hooks/usePortfolio'
import styles from './Portfolio.module.css'

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
    <div className={styles.container}>
      <header className={styles.portfolioHeader}>
        <div>
          <h1>Portfolio</h1>
          <p>Administra tus criptomonedas favoritas y consulta su evolución.</p>
        </div>
        {portfolio.length > 0 && (
          <div className={styles.portfolioSummary}>
            <span className={styles.portfolioTotal}>
              Valor estimado: <strong>{formatCurrency(totalValue)}</strong>
            </span>
            <button type="button" className={styles.portfolioClear} onClick={clearPortfolio}>
              Vaciar portfolio
            </button>
          </div>
        )}
      </header>

      {portfolio.length === 0 ? (
        <section className={styles.portfolioEmpty} role="status">
          <h2>No hay criptomonedas guardadas</h2>
          <p>Visita el listado de criptos y añade tus favoritas para construir tu portfolio.</p>
          <a href="/criptos" className={styles.portfolioLink}>
            Ir al listado de criptomonedas
          </a>
        </section>
      ) : (
        <section className={styles.cryptoGrid} role="list">
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