function Home() {
  return (
    <div className="page-container">
      <h1>Mensaje de bienvenida</h1>
      <p>Las últimas noticias y tendencias</p>
      <div className="hero-section">
        <h2>Mantente al día</h2>
        <p>Descubre las últimas noticias sobre Bitcoin, Ethereum ......</p>
        <div style={{marginTop: '2rem'}}>
          <h3>Enlaces de prueba:</h3>
          <ul>
            <li><a href="/noticia/1">Ver Noticia #1</a></li>
            <li><a href="/noticia/bitcoin-precio">Ver Noticia Bitcoin</a></li>
            <li><a href="/noticia/ethereum-actualización">Ver Noticia Ethereum</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home