function Criptos() {
  return (
    <div className="page-container">
      <h1>Criptomonedas Populares</h1>
      <p>Explora las criptomonedas más relevantes del mercado</p>
      <div className="crypto-grid">
        <div className="crypto-placeholder">
          <h3>Bitcoin (BTC)</h3>
          <p>El papa</p>
        </div>
        <div className="crypto-placeholder">
          <h3>Ethereum (ETH)</h3>
          <p>Sablazos de gas</p>
        </div>
        <div className="crypto-placeholder">
          <h3>Solana (SOL)</h3>
          <p>El ascensor</p>
        </div>
      </div>
    </div>
  )
}

export default Criptos