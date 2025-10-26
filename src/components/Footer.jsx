import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.credit}>Proyecto 4 • Luis</p>
        <p className={styles.apis}>Data: CoinGecko | CryptoPanic</p>
      </div>
    </footer>
  )
}

export default Footer
