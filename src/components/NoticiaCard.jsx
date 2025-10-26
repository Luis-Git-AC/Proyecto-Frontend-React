function NoticiaCard({ noticia }) {
  const {
    titulo,
    descripcion,
    fecha,
    imagen,
    moneda
  } = noticia

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="noticia-card">
      <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="card-link">
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
            <span className="leer-mas">Leer artículo completo →</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default NoticiaCard