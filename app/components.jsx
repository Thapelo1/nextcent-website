function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  ariaLabel,
  className = "",
}) {
  return (
    <a
      aria-label={ariaLabel}
      className={`action-link action-link--${variant} ${className}`.trim()}
      href={href}
    >
      {children}
      <ArrowIcon className="action-link__arrow" />
    </a>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  id,
}) {
  return (
    <div className={`section-intro${centered ? " section-intro--centered" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function CommunityIcon({ variant }) {
  if (variant === "association") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
        <path
          d="M5 26h22M8 26V13l8-6 8 6v13M12 16h2m4 0h2m-8 5h8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (variant === "clubs") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 26s-9-5.3-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.7-9 12-9 12Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m12 16 2.5 2.5L20 13"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
      <path
        d="M16 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM7 27v-2a9 9 0 0 1 18 0v2M24 7.5a4 4 0 0 1 0 7.5m2 12v-2a7 7 0 0 0-4-6.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AudienceCard({ title, description, variant = "members" }) {
  return (
    <article className="audience-card">
      <div className="audience-card__icon">
        <CommunityIcon variant={variant} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function FeatureSection({
  id,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  actionHref = "#register",
  actionLabel = "Learn more",
}) {
  return (
    <section className="feature-section" id={id}>
      <div className="container">
        <div
          className={`row align-items-center g-4${reverse ? " flex-lg-row-reverse" : ""}`}
        >
          <div className="col-12 col-lg-5">
            <div className="feature-section__image-wrap">
              <img
                alt={imageAlt}
                className="feature-section__image"
                height="340"
                loading="lazy"
                src={image}
                width="440"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="feature-copy">
              <h2>{title}</h2>
              <p>{description}</p>
              <ActionLink href={actionHref}>{actionLabel}</ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const clientNames = [
  "Northstar",
  "Mosaic",
  "Vertex",
  "Sphera",
  "Natura",
  "Circle",
];

export function ClientLogos({ includeTesla = false }) {
  return (
    <ul className="client-list" aria-label="Our clients">
      {includeTesla ? (
        <li>
          <img
            alt="Tesla"
            className="customer-logo"
            height="34"
            loading="lazy"
            src="./images/customer-card.png"
            width="46"
          />
        </li>
      ) : null}
      {clientNames.map((name) => (
        <li key={name}>
          <span className="client-mark" aria-hidden="true" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export function StatItem({ value, label, icon }) {
  return (
    <div className="stat-item">
      <span className="stat-item__icon" aria-hidden="true">
        <StatIcon name={icon} />
      </span>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function StatIcon({ name }) {
  const paths = {
    people: "M16 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-9 12v-2a9 9 0 0 1 18 0v2M24 7a4 4 0 0 1 0 8m2 12v-2a7 7 0 0 0-4-6",
    groups:
      "M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 27v-2a7 7 0 0 1 14 0v2m2 0v-2a7 7 0 0 1 10-6",
    calendar:
      "M7 5v4m18-4v4M5 11h22M7 7h18a2 2 0 0 1 2 2v16H5V9a2 2 0 0 1 2-2Zm4 9h3m4 0h3m-10 5h3m4 0h3",
    payments:
      "M4 8h24v17H4V8Zm0 5h24M9 19h6m-11-9 4-5h19l4 5",
  };

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
      <path
        d={paths[name] || paths.people}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function BlogCard({ image, imageAlt, title, href = "#register" }) {
  return (
    <article className="blog-card">
      <img
        alt={imageAlt}
        className="blog-card__image"
        height="230"
        loading="lazy"
        src={image}
        width="360"
      />
      <div className="blog-card__content">
        <h3>{title}</h3>
        <a className="blog-card__link" href={href}>
          Read more
          <ArrowIcon className="action-link__arrow" />
        </a>
      </div>
    </article>
  );
}

export function CallToAction() {
  return (
    <section className="call-to-action" id="register">
      <div className="container">
        <h2>Pellentesque suscipit fringilla libero eu.</h2>
        <ActionLink href="#home">Get a demo</ActionLink>
      </div>
    </section>
  );
}

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#home" },
      { label: "Blog", href: "#updates" },
      { label: "Contact us", href: "#register" },
      { label: "Pricing", href: "#product" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "#faq" },
      { label: "Terms of service", href: "#faq" },
      { label: "Legal", href: "#faq" },
      { label: "Privacy policy", href: "#faq" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="faq">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-12 col-lg-4">
            <a className="brand footer-brand" href="./" aria-label="Nextcent home">
              <span className="brand-mark" aria-hidden="true">
                N
              </span>
              Nextcent
            </a>
            <p className="footer-copy">
              Copyright (c) 2026 Nextcent Ltd.
              <br />
              All rights reserved
            </p>
            <div className="social-links" aria-label="Social links">
              <a href="#home" aria-label="Instagram">
                IG
              </a>
              <a href="#home" aria-label="Website updates">
                X
              </a>
              <a href="#home" aria-label="LinkedIn">
                in
              </a>
              <a href="#home" aria-label="YouTube">
                YT
              </a>
            </div>
          </div>
          {footerGroups.map((group) => (
            <div className="col-6 col-lg-2 footer-links" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-12 col-lg-3 footer-links">
            <h2>Stay up to date</h2>
            <form
              action="#register"
              className="footer-newsletter"
              aria-label="Newsletter sign up"
            >
              <input
                aria-label="Your email address"
                autoComplete="email"
                name="email"
                placeholder="Your email address"
                type="email"
              />
              <button type="submit" aria-label="Submit email">
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
