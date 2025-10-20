import Header from './Header'

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2025 CriptoNews</p>
      </footer>
    </div>
  )
}

export default Layout