function Favoritos() {
  return (
    <div className="page-container">
      <h1>Noticias Favoritas</h1>
      <div className="favoritos-section">
        <p>Aquí aparecerán las noticias marcadas como favoritas</p>
        <div className="favoritos-empty">
          <h3>favoritos</h3>
          <div className="favoritos-preview">
            <div className="favorito-item">
              <h4>Ejemplo: Bitcoin alcanza nuevo máximo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favoritos