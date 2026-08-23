import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
        <div className="container-fluid site-header__inner">
          <NavLink className="navbar-brand site-brand" to="/" aria-label="Nexa home">
            <span className="site-brand__mark" aria-hidden="true">N</span>
            <span>
              <span className="site-brand__name">Nexa</span>
              <span className="site-brand__tagline">Build what matters</span>
            </span>
          </NavLink>

          <button
            className="navbar-toggler site-header__toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Navbar />  
        </div>
      </nav>
    </header>
  )
}

export default Header
