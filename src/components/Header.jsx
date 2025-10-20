import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>CriptoNews</h1>
          </Link>
        </div>
        
        <nav className="navigation">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/criptos" className={isActive('/criptos')}>
            Criptos
          </Link>
          <Link to="/favoritos" className={isActive('/favoritos')}>
            Favoritos
          </Link>
        </nav>

        <div className="header-actions">
          <button className="search-btn">Buscar</button>
          <button className="theme-btn">Tema</button>
        </div>
      </div>
    </header>
  )
}

export default Header