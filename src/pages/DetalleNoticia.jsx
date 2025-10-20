import { useParams } from 'react-router-dom'

function DetalleNoticia() {
  const { id } = useParams()

  return (
    <div className="page-container">
      <h1>Detalle de la Noticia</h1>
      <div className="noticia-detalle">
        <h2>Noticia #{id}</h2>
        <p className="fecha">20 de octubre de 2025</p>
        <div className="contenido">
          <p>
            NOTICIA 
            Aquí el contenido completo de la noticia seleccionada.
          </p>
          <p>
            Datos reales de las apis en fases posteriores: <strong>{id}</strong>
          </p>
        </div>
        <div className="acciones">
          <button className="btn-favorito">Agregar a Favoritos</button>
          <button className="btn-compartir">Compartir</button>
        </div>
      </div>
    </div>
  )
}

export default DetalleNoticia