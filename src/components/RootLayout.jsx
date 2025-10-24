import { Outlet } from 'react-router-dom'
import Header from './Header'

function RootLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 CriptoNews</p>
      </footer>
    </div>
  )
}

export default RootLayout