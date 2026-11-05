import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  AchievementsSection,
  ClientsSection,
  CommunitySection,
  HeroSection,
  TestimonialSection,
  UpdatesSection,
} from "../../app/sections";

describe("homepage sections", () => {
  it("renders the hero heading and registration link", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        name: /Lessons and insights.*from 8 years/,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Register" }).getAttribute("href"),
    ).toBe("#register");
  });

  it("renders the clients introduction and client list", () => {
    render(<ClientsSection />);

    const section = screen.getByRole("region", { name: "Our clients" });
    expect(within(section).getByRole("list", { name: "Our clients" })).toBeTruthy();
    expect(within(section).getByText("Northstar")).toBeTruthy();
  });

  it("renders all community audience cards", () => {
    render(<CommunitySection />);

    const section = screen.getByRole("region", {
      name: "Manage your entire community in a single system",
    });
    expect(within(section).getAllByRole("article")).toHaveLength(3);
    expect(
      within(section).getByRole("heading", { name: "National associations" }),
    ).toBeTruthy();
  });

  it("renders the achievements copy and all four statistics", () => {
    render(<AchievementsSection />);

    expect(
      screen.getByRole("heading", { name: "Helping a local business reinvent itself" }),
    ).toBeTruthy();
    expect(screen.getByText("2,245,341")).toBeTruthy();
    expect(screen.getByText("46,328")).toBeTruthy();
    expect(screen.getByText("828,867")).toBeTruthy();
    expect(screen.getByText("1,926,436")).toBeTruthy();
  });

  it("renders the customer quote and its attribution", () => {
    render(<TestimonialSection />);

    const section = screen.getByRole("region", { name: "Meet our customers" });
    expect(within(section).getByText(/connect with our members/)).toBeTruthy();
    expect(within(section).getByText("Tim Smith")).toBeTruthy();
    expect(
      within(section).getByRole("img", { name: "Tesla" }),
    ).toBeTruthy();
  });

  it("renders all three community update cards", () => {
    render(<UpdatesSection />);

    const section = screen.getByRole("region", {
      name: "Caring is the new marketing",
    });
    expect(within(section).getAllByRole("article")).toHaveLength(3);
    expect(
      within(section).getByRole("heading", {
        name: "Caring is the new marketing",
        level: 2,
      }),
    ).toBeTruthy();
    expect(within(section).getAllByRole("link", { name: "Read more" })).toHaveLength(
      3,
    );
  });
});
