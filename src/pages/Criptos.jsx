import useCriptos from '../hooks/useCriptos'
import CoinCard from '../components/CoinCard'
import usePortfolio from '../hooks/usePortfolio'
import { SearchForm } from '../components/SearchForm'
import styles from './Criptos.module.css'

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
    <div className={styles.container}>
      <section className={styles.cryptoHeader}>
        <div>
          <h1>Criptomonedas Top 20</h1>
          <p>Datos en tiempo real desde CoinGecko</p>
        </div>

        <div className={styles.cryptoActions}>
          <SearchForm
            onSearch={setQuery}
            placeholder="Buscar por nombre o símbolo"
            label="Buscar criptomoneda"
            defaultValue={query}
          />

          <button
            type="button"
            className={styles.btnRefresh}
            onClick={handleRefresh}
            disabled={loading}
          >
            {loading ? 'Actualizando…' : 'Actualizar'}
          </button>
        </div>
      </section>

      {lastUpdatedLabel && (
        <p className={styles.cryptoLastUpdated}>
          Última actualización: <strong>{lastUpdatedLabel}</strong>
        </p>
      )}

      {error && (
        <div className={styles.cryptoError} role="alert">
          <p>{error}</p>
          <button type="button" onClick={handleRefresh} disabled={loading}>
            Reintentar
          </button>
        </div>
      )}

      {loading && !filteredCoins.length ? (
        <div className={styles.cryptoLoading}>Cargando datos…</div>
      ) : (
        <div className={styles.cryptoGrid} role="list">
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
        <p className={styles.cryptoEmpty}>No se encontraron criptomonedas para tu búsqueda.</p>
      )}
    </div>
  )
}

export default Criptos