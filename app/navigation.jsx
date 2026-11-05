export default function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <a className="brand" href="./" aria-label="Nextcent home">
        <span className="brand-mark" aria-hidden="true">
          N
        </span>
        Nextcent
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Service</a>
        <a href="#features">Feature</a>
        <a href="#product">Product</a>
      </div>
      <a className="login-link" href="#login">
        Log in
      </a>
    </nav>
  );
}
