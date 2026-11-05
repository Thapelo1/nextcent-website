export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Main navigation">
        <a className="brand" href="./" aria-label="Nextcent home">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          Nextcent
        </a>
        <div className="nav-links nav-links--desktop">
          <a href="#home">Home</a>
          <a href="#services">Service</a>
          <a href="#features">Feature</a>
          <a href="#product">Product</a>
          <a href="#testimonials">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
        <details className="mobile-menu">
          <summary>
            <span className="mobile-menu__icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            Menu
          </summary>
          <div className="nav-links mobile-menu__links">
            <a href="#home">Home</a>
            <a href="#services">Service</a>
            <a href="#features">Feature</a>
            <a href="#product">Product</a>
            <a href="#testimonials">Testimonial</a>
            <a href="#faq">FAQ</a>
          </div>
        </details>
        <div className="navigation-actions">
          <a className="login-link" href="#login">
            Log in
          </a>
          <a className="nav-signup" href="#register">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
