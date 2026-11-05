import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  ActionLink,
  AudienceCard,
  BlogCard,
  CallToAction,
  ClientLogos,
  FeatureSection,
  SectionIntro,
  SiteFooter,
  StatItem,
} from "../../app/components";

describe("reusable landing page components", () => {
  it("renders action links with their destination", () => {
    render(<ActionLink href="#register">Join today</ActionLink>);

    expect(
      screen.getByRole("link", { name: "Join today" }).getAttribute("href"),
    ).toBe("#register");
  });

  it("renders a centered section intro", () => {
    render(
      <SectionIntro
        centered
        title="Our community"
        description="Everything in one place."
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Our community" }),
    ).toBeTruthy();
    expect(screen.getByText("Everything in one place.")).toBeTruthy();
  });

  it("renders audience card content", () => {
    render(
      <AudienceCard
        title="Clubs and groups"
        description="Grow together."
        variant="clubs"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Clubs and groups" }),
    ).toBeTruthy();
    expect(screen.getByText("Grow together.")).toBeTruthy();
  });

  it("renders a feature section with its image and action", () => {
    render(
      <FeatureSection
        id="features"
        title="A better platform"
        description="Built for every community."
        image="/feature.png"
        imageAlt="A community platform"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "A better platform" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("img", { name: "A community platform" }).getAttribute("src"),
    ).toBe("/feature.png");
    expect(
      screen.getByRole("link", { name: "Learn more" }).getAttribute("href"),
    ).toBe("#register");
  });

  it("renders client logos as a labelled list", () => {
    render(<ClientLogos />);

    expect(screen.getByRole("list", { name: "Our clients" })).toBeTruthy();
    expect(screen.getByText("Northstar")).toBeTruthy();
  });

  it("renders a statistic", () => {
    render(<StatItem value="2,245,341" label="Members" icon="people" />);

    expect(screen.getByText("2,245,341")).toBeTruthy();
    expect(screen.getByText("Members")).toBeTruthy();
  });

  it("renders a blog card and its link", () => {
    render(
      <BlogCard
        image="/story.png"
        imageAlt="A member reading a story"
        title="Build stronger communities"
        href="#updates"
      />,
    );

    expect(
      screen.getByRole("img", { name: "A member reading a story" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("img", { name: "A member reading a story" }).getAttribute("src"),
    ).toBe("/story.png");
    expect(
      screen.getByRole("link", { name: "Read more" }).getAttribute("href"),
    ).toBe("#updates");
  });

  it("renders the registration call to action", () => {
    render(<CallToAction />);

    expect(
      screen.getByRole("heading", {
        name: "Pellentesque suscipit fringilla libero eu.",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Get a demo" }).getAttribute("href"),
    ).toBe("#home");
  });

  it("renders the footer links and newsletter form", () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole("heading", { name: "Company" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("form", { name: "Newsletter sign up" }),
    ).toBeTruthy();
  });
});
