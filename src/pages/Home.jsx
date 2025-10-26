import { useState, useMemo } from 'react'
import useNoticias from '../hooks/useNoticias'
import NoticiaCard from '../components/NoticiaCard'
import { SearchForm } from '../components/SearchForm'
import styles from './Home.module.css'

function Home() {
  const { noticias, loading, error } = useNoticias()
  const [searchTerm, setSearchTerm] = useState('')

  const noticiasFiltradas = useMemo(() => {
    if (!searchTerm.trim()) return noticias
    
    const termLower = searchTerm.toLowerCase()
    return noticias.filter(
      (noticia) =>
        noticia.titulo?.toLowerCase().includes(termLower) ||
        noticia.descripcion?.toLowerCase().includes(termLower) ||
        noticia.moneda?.toLowerCase().includes(termLower)
    )
  }, [noticias, searchTerm])

  return (
    <div className={styles.container}>
      <div className={styles.newsHeader}>
        <h1>Últimas Noticias Crypto</h1>
        <p>Las noticias más recientes del mundo de las criptomonedas</p>
      </div>

      <SearchForm
        onSearch={setSearchTerm}
        placeholder="Buscar noticias (Bitcoin, Ethereum, DeFi...)"
        label="Buscar noticias"
      />

      {error && (
        <div className={styles.error} role="alert">
          <p>{error}</p>
          <p>Por favor, recarga la página para intentar nuevamente.</p>
        </div>
      )}

      {loading && !noticias.length ? (
        <div className={styles.loading}>Cargando noticias…</div>
      ) : (
        <div className={styles.newsGrid} role="list">
          {noticiasFiltradas.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
      )}

      {!loading && !error && noticiasFiltradas.length === 0 && (
        <p className={styles.empty}>
          {searchTerm 
            ? `No se encontraron noticias para "${searchTerm}"`
            : 'No se encontraron noticias disponibles.'}
        </p>
      )}
    </div>
  )
}

export default Home