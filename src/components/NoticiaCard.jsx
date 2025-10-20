import { Link } from 'react-router-dom'

function NoticiaCard({ noticia }) {
  const {
    id,
    titulo,
    descripcion,
    fecha,
    imagen,
    moneda,
    esFavorito = false
  } = noticia

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleFavorito = (e) => {
    e.preventDefault()
  }

  return (
    <article className="noticia-card">
      <Link to={`/noticia/${id}`} className="card-link">
        <div className="card-image">
          {imagen ? (
            <img src={imagen} alt={titulo} />
          ) : (
            <div className="image-placeholder">
              {moneda}
            </div>
          )}
        </div>
        
        <div className="card-content">
          <div className="card-header">
            <span className="moneda-tag">{moneda}</span>
            <span className="fecha">{formatearFecha(fecha)}</span>
          </div>
          
          <h3 className="titulo">{titulo}</h3>
          <p className="descripcion">{descripcion}</p>
          
          <div className="card-footer">
            <span className="leer-mas">Leer más →</span>
          </div>
        </div>
      </Link>
      
      <button 
        className={`btn-favorito ${esFavorito ? 'favorito' : ''}`}
        onClick={handleFavorito}
        title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {esFavorito ? '★' : '☆'}
      </button>
    </article>
  )
}

export default NoticiaCard