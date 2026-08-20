import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
        <div className="container-fluid site-header__inner">
          <a className="navbar-brand site-brand" href="/" aria-label="Nexa home">
            <span className="site-brand__mark" aria-hidden="true">N</span>
            <span>
              <span className="site-brand__name">Nexa</span>
              <span className="site-brand__tagline">Build what matters</span>
            </span>
          </a>

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

          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#login">Login</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#signup">Signup</a>
              </li>
              {/* <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a className="btn site-header__cta" href="#contact">Get started <span aria-hidden="true">&#8594;</span></a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
