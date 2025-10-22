import useCriptos from '../hooks/useCriptos'
import CoinCard from '../components/CoinCard'
import usePortfolio from '../context/usePortfolio'

function Criptos() {
  const {
    filteredCoins,
    loading,
    error,
    query,
    setQuery,
    refresh,
    lastUpdated
  } = useCriptos()
  const { toggleCoin, isInPortfolio } = usePortfolio()

  const handleSearchChange = (event) => {
    setQuery(event.target.value)
  }

  const handleRefresh = () => {
    if (!loading) {
      refresh()
    }
  }

  const lastUpdatedLabel = lastUpdated
    ? new Date(lastUpdated).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      })
    : null

  return (
    <div className="page-container">
      <section className="crypto-header">
        <div>
          <h1>Criptomonedas Top 20</h1>
          <p>Datos en tiempo real desde CoinGecko</p>
        </div>

        <div className="crypto-actions">
          <div className="crypto-search">
            <label htmlFor="crypto-search" className="sr-only">
              Buscar criptomoneda
            </label>
            <input
              id="crypto-search"
              type="search"
              value={query}
              onChange={handleSearchChange}
              placeholder="Buscar por nombre o símbolo"
              aria-label="Buscar criptomoneda"
            />
          </div>

          <button
            type="button"
            className="btn-refresh"
            onClick={handleRefresh}
            disabled={loading}
          >
            {loading ? 'Actualizando…' : 'Actualizar'}
          </button>
        </div>
      </section>

      {lastUpdatedLabel && (
        <p className="crypto-last-updated">
          Última actualización: <strong>{lastUpdatedLabel}</strong>
        </p>
      )}

      {error && (
        <div className="crypto-error" role="alert">
          <p>{error}</p>
          <button type="button" onClick={handleRefresh} disabled={loading}>
            Reintentar
          </button>
        </div>
      )}

      {loading && !filteredCoins.length ? (
        <div className="crypto-loading">Cargando datos…</div>
      ) : (
        <div className="crypto-grid" role="list">
          {filteredCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              coin={coin}
              isInPortfolio={isInPortfolio(coin.id)}
              onTogglePortfolio={toggleCoin}
            />
          ))}
        </div>
      )}

      {!loading && !error && filteredCoins.length === 0 && (
        <p className="crypto-empty">No se encontraron criptomonedas para tu búsqueda.</p>
      )}
    </div>
  )
}

export default Criptos