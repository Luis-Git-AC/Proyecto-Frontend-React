import useNoticias from '../hooks/useNoticias'
import NoticiaCard from '../components/NoticiaCard'

function Home() {
  const { noticias, loading, error } = useNoticias()

  return (
    <div className="page-container">
      <div className="news-header">
        <h1>Últimas Noticias Crypto</h1>
        <p>Las noticias más recientes del mundo de las criptomonedas</p>
      </div>

      {error && (
        <div className="crypto-error" role="alert">
          <p>{error}</p>
          <p>Por favor, recarga la página para intentar nuevamente.</p>
        </div>
      )}

      {loading && !noticias.length ? (
        <div className="crypto-loading">Cargando noticias…</div>
      ) : (
        <div className="crypto-grid" role="list">
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
      )}

      {!loading && !error && noticias.length === 0 && (
        <p className="crypto-empty">No se encontraron noticias disponibles.</p>
      )}
    </div>
  )
}

export default Home