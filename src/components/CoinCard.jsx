import { memo } from 'react'

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
    <article className="coin-card" aria-label={`Información de ${coin.name}`}>
      <header className="coin-card__header">
        <div className="coin-card__identity">
          <span className="coin-card__rank">#{coin.marketCapRank}</span>
          <img className="coin-card__image" src={coin.image} alt={coin.name} loading="lazy" width="40" height="40" />
          <div>
            <h3 className="coin-card__name">{coin.name}</h3>
            <span className="coin-card__symbol">{coin.symbol.toUpperCase()}</span>
          </div>
        </div>
        <button
          type="button"
          className={`coin-card__favorite ${isInPortfolio ? 'coin-card__favorite--active' : ''}`}
          onClick={handleToggle}
          aria-pressed={isInPortfolio}
        >
          {isInPortfolio ? '★' : '☆'}
        </button>
      </header>

      <section className="coin-card__body">
        <div className="coin-card__price" aria-label="Precio actual">
          {formatCurrency(coin.currentPrice)}
        </div>
        <div className={`coin-card__change ${isPositive ? 'coin-card__change--positive' : 'coin-card__change--negative'}`} aria-label="Variación 24 horas">
          {formatPercentage(priceChange)}
        </div>
      </section>

      <footer className="coin-card__footer">
        <div>
          <span className="coin-card__label">Market Cap</span>
          <span className="coin-card__value">{formatCurrency(coin.marketCap)}</span>
        </div>
        <div>
          <span className="coin-card__label">Volumen 24h</span>
          <span className="coin-card__value">{formatCurrency(coin.totalVolume)}</span>
        </div>
      </footer>
    </article>
  )
}

export default memo(CoinCard)
