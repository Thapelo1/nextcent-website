import Navigation from "./navigation";
import {
  CallToAction,
  FeatureSection,
  SiteFooter,
} from "./components";
import {
  AchievementsSection,
  ClientsSection,
  CommunitySection,
  HeroSection,
  TestimonialSection,
  UpdatesSection,
} from "./sections";

export default function Home() {
  return (
    <main className="page">
      <Navigation />

      <HeroSection />
      <ClientsSection />
      <CommunitySection />

      <FeatureSection
        id="features"
        title="The unseen of spending three years at Pixelgrade"
        description="Our membership management software provides full automation of membership renewals and payments. Focus on the work that matters while your community stays connected."
        image="./images/feature-illustration.png"
        imageAlt="Two people collaborating on a membership management screen"
        actionHref="#product"
      />

      <AchievementsSection />

      <FeatureSection
        id="product"
        title="How to design your site footer like we did"
        description="A clear, thoughtful website makes it easier for members to find the support and information they need. Bring your tools, content, and community together with Nextcent."
        image="./images/update-business.png"
        imageAlt="A laptop and notes on a desk as a team plans their website"
        reverse
        actionHref="#testimonials"
      />

      <TestimonialSection />
      <UpdatesSection />

      <CallToAction />
      <SiteFooter />
    </main>
  );
}
