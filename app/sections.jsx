import {
  ActionLink,
  AudienceCard,
  BlogCard,
  ClientLogos,
  SectionIntro,
  StatItem,
} from "./components";

const audienceCards = [
  {
    title: "Membership organisations",
    description:
      "Bring every member, event, and renewal together in one easy-to-use place.",
    variant: "members",
  },
  {
    title: "National associations",
    description:
      "Give your association the tools to connect local groups and grow together.",
    variant: "association",
  },
  {
    title: "Clubs and groups",
    description:
      "Spend less time coordinating and more time building a community people love.",
    variant: "clubs",
  },
];

const updates = [
  {
    image: "./images/update-community.png",
    imageAlt: "A community member working on a laptop at home",
    title: "Creating a better way for your community to grow",
  },
  {
    image: "./images/feature-illustration.png",
    imageAlt: "Two people working together on a membership platform",
    title: "How to make membership management feel effortless",
  },
  {
    image: "./images/update-business.png",
    imageAlt: "A team member planning work at a laptop",
    title: "The simple guide to growing your organisation online",
  },
];

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg fill="none" viewBox="0 0 430 360">
        <circle cx="238" cy="170" r="151" fill="#E8F5E9" />
        <circle cx="351" cy="63" r="18" fill="#C8E6C9" />
        <circle cx="69" cy="258" r="10" fill="#FBC02D" />
        <path
          d="M58 303h314"
          stroke="#C8D1D4"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <rect
          x="112"
          y="49"
          width="220"
          height="188"
          rx="12"
          fill="white"
          stroke="#DDE5E8"
          strokeWidth="3"
        />
        <path d="M112 75h220" stroke="#E7EBED" strokeWidth="3" />
        <circle cx="130" cy="62" r="4" fill="#4CAF4F" />
        <circle cx="145" cy="62" r="4" fill="#FBC02D" />
        <circle cx="160" cy="62" r="4" fill="#EF8A75" />
        <rect x="134" y="95" width="91" height="9" rx="4.5" fill="#E7EBED" />
        <rect x="134" y="113" width="143" height="6" rx="3" fill="#F0F2F3" />
        <rect x="134" y="127" width="112" height="6" rx="3" fill="#F0F2F3" />
        <rect x="134" y="151" width="169" height="64" rx="8" fill="#F5F7FA" />
        <path
          d="m146 198 30-19 25 10 28-23 27 16 31-20"
          stroke="#4CAF4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <circle cx="229" cy="132" r="5" fill="#4CAF4F" />
        <path
          d="M189 237h66l13 27h-92l13-27Z"
          fill="#D6E4E8"
          stroke="#C1D0D4"
          strokeWidth="2"
        />
        <path d="M166 267h112" stroke="#AAB9BE" strokeWidth="5" />
        <path
          d="M81 299c-3-19 2-38 15-48 12-9 24-6 29 5 4 10-2 22-4 36l-2 7H81Z"
          fill="#263238"
        />
        <path
          d="M92 251c-10-10-12-27-5-40 7-14 22-17 33-9 11 8 12 23 5 35-6 10-20 18-33 14Z"
          fill="#F0A27E"
        />
        <path
          d="M86 218c-2-15 8-27 21-27 11 0 18 7 19 18-7-5-14-6-21-3-5 7-11 11-19 12Z"
          fill="#263238"
        />
        <path
          d="M94 258c-11 2-20 7-25 16l-14 25h23l16-17"
          fill="#4CAF4F"
        />
        <path
          d="M119 258c11 4 17 13 19 25l4 16h-22l-10-20"
          fill="#4CAF4F"
        />
        <path
          d="M332 297c1-24-3-41-14-50-12-10-25-6-29 6-4 10 2 22 3 35l1 9h39Z"
          fill="#263238"
        />
        <path
          d="M324 251c11-9 13-27 6-40-7-14-22-17-33-9-11 8-12 23-5 35 6 10 20 18 32 14Z"
          fill="#C98161"
        />
        <path
          d="M333 219c2-15-8-27-21-27-11 0-18 7-19 18 7-5 14-6 21-3 5 7 11 11 19 12Z"
          fill="#263238"
        />
        <path
          d="M322 258c11 2 20 7 25 16l14 25h-23l-16-17"
          fill="#388E3B"
        />
        <path
          d="M297 258c-11 4-17 13-19 25l-4 16h22l10-20"
          fill="#388E3B"
        />
        <path
          d="M54 301h26m252 0h29"
          stroke="#263238"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row hero__content g-4">
          <div className="col-12 col-md-7 d-flex align-items-center">
            <div className="hero__copy">
              <h1>
                Lessons and insights
                <br />
                <span>from 8 years</span>
              </h1>
              <p className="hero__description">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <ActionLink href="#register">Register</ActionLink>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex align-items-center">
            <HeroArtwork />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientsSection() {
  return (
    <section className="content-section" aria-labelledby="clients-title">
      <div className="container">
        <SectionIntro
          centered
          description="We have been working with some Fortune 500+ clients."
          title="Our clients"
          id="clients-title"
        />
        <ClientLogos />
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section
      className="content-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionIntro
          centered
          description="Who is Nextcent suitable for?"
          title="Manage your entire community in a single system"
          id="services-title"
        />
        <div className="row audience-grid g-4">
          {audienceCards.map((card) => (
            <div className="col-12 col-md-4" key={card.title}>
              <AudienceCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section className="achievements" aria-labelledby="achievements-title">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-5">
            <div className="achievement-copy">
              <h2 id="achievements-title">
                Helping a local business{" "}
                <span className="highlight">reinvent itself</span>
              </h2>
              <p>We reached here with our hard work and dedication.</p>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="row stats-grid">
              <div className="col-6">
                <StatItem icon="people" value="2,245,341" label="Members" />
              </div>
              <div className="col-6">
                <StatItem icon="groups" value="46,328" label="Clubs" />
              </div>
              <div className="col-6">
                <StatItem
                  icon="calendar"
                  value="828,867"
                  label="Event bookings"
                />
              </div>
              <div className="col-6">
                <StatItem icon="payments" value="1,926,436" label="Payments" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section
      className="testimonial"
      id="testimonials"
      aria-labelledby="testimonial-title"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-4">
            <img
              alt="A community member using a laptop at home"
              className="testimonial__image"
              height="310"
              loading="lazy"
              src="./images/update-community.png"
              width="330"
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="testimonial-copy">
              <h2 className="visually-hidden" id="testimonial-title">
                Meet our customers
              </h2>
              <blockquote>
                It has helped us connect with our members and organize the work
                we do every day. Nextcent gives our team more time to focus on
                the community.
              </blockquote>
              <p className="testimonial__name">Tim Smith</p>
              <p className="testimonial__organization">
                British Dragon Boat Racing Association
              </p>
              <div className="testimonial__clients">
                <ClientLogos includeTesla />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UpdatesSection() {
  return (
    <section
      className="content-section updates"
      id="updates"
      aria-labelledby="updates-title"
    >
      <div className="container">
        <SectionIntro
          centered
          description="Discover ways to build stronger relationships and make the most of your community."
          title="Caring is the new marketing"
          id="updates-title"
        />
        <div className="row updates-grid g-4">
          {updates.map((update) => (
            <div className="col-12 col-md-4" key={update.title}>
              <BlogCard {...update} href="#register" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
