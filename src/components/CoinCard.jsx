import { memo } from 'react'
import styles from './CoinCard.module.css'

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 4 : 2
  }).format(value)
}

function formatPercentage(value) {
  if (value == null) return 'N/A'
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 2
  })
  return formatter.format(value / 100)
}

function CoinCard({ coin, isInPortfolio = false, onTogglePortfolio }) {
  const priceChange = coin.priceChangePercentage24h
  const isPositive = typeof priceChange === 'number' && priceChange >= 0

  const handleToggle = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (onTogglePortfolio) {
      onTogglePortfolio(coin)
    }
  }

  return (
    <article className={styles.card} aria-label={`Información de ${coin.name}`}>
      <header className={styles.header}>
        <div className={styles.identity}>
          <span className={styles.rank}>#{coin.marketCapRank}</span>
          <img className={styles.image} src={coin.image} alt={coin.name} loading="lazy" width="40" height="40" />
          <div>
            <h3 className={styles.name}>{coin.name}</h3>
            <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
          </div>
        </div>
        <button
          type="button"
          className={`${styles.favorite} ${isInPortfolio ? styles.favoriteActive : ''}`}
          onClick={handleToggle}
          aria-pressed={isInPortfolio}
        >
          {isInPortfolio ? '★' : '☆'}
        </button>
      </header>

      <section className={styles.body}>
        <div className={styles.price} aria-label="Precio actual">
          {formatCurrency(coin.currentPrice)}
        </div>
        <div className={`${styles.change} ${isPositive ? styles.changePositive : styles.changeNegative}`} aria-label="Variación 24 horas">
          {formatPercentage(priceChange)}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <span className={styles.label}>Market Cap</span>
          <span className={styles.value}>{formatCurrency(coin.marketCap)}</span>
        </div>
        <div>
          <span className={styles.label}>Volumen 24h</span>
          <span className={styles.value}>{formatCurrency(coin.totalVolume)}</span>
        </div>
      </footer>
    </article>
  )
}

export default memo(CoinCard)
