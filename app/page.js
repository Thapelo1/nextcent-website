import Navigation from "./navigation";

export default function Home() {
  return (
    <main className="page">
      <Navigation />

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Together, we grow</p>
          <h1>
            Lessons and insights
            <br />
            <span>from 8 years</span>
          </h1>
          <p className="hero-description">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a className="button" href="#services">
            Register
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-sun" />
          <div className="art-card">
            <span className="art-card-label">COMMUNITY</span>
            <span className="art-card-number">8+</span>
            <span className="art-card-caption">years growing together</span>
          </div>
          <div className="art-dot art-dot-one" />
          <div className="art-dot art-dot-two" />
        </div>
      </section>

      <section className="clients" id="services">
        <h2>Our trusted community</h2>
        <p>Helping teams and organizations make more of every opportunity.</p>
        <div className="client-list" aria-label="Community values">
          <span>Connect</span>
          <span>Collaborate</span>
          <span>Grow</span>
          <span>Thrive</span>
          <span>Together</span>
          <span>Nextcent</span>
        </div>
      </section>
    </main>
  );
}
