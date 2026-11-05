import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navigation from "../../app/navigation";

describe("Navigation", () => {
  it("renders the home link and section navigation", () => {
    const { container } = render(<Navigation />);

    const navigation = within(container).getByRole("navigation", {
      name: "Main navigation",
    });
    const desktopLinks = navigation.querySelector(".nav-links--desktop");

    expect(
      within(navigation)
        .getByRole("link", { name: "Nextcent home" })
        .getAttribute("href"),
    ).toBe("./");
    expect(
      within(desktopLinks)
        .getByRole("link", { name: "Home" })
        .getAttribute("href"),
    ).toBe("#home");
    expect(
      within(desktopLinks)
        .getByRole("link", { name: "Service" })
        .getAttribute("href"),
    ).toBe("#services");
    expect(
      within(desktopLinks)
        .getByRole("link", { name: "Feature" })
        .getAttribute("href"),
    ).toBe("#features");
    expect(
      within(navigation)
        .getByRole("link", { name: "Sign up" })
        .getAttribute("href"),
    ).toBe("#register");
  });

  it("provides an accessible collapsible menu for mobile navigation", () => {
    const { container } = render(<Navigation />);

    const navigation = within(container).getByRole("navigation", {
      name: "Main navigation",
    });
    const mobileMenu = navigation.querySelector(".mobile-menu");

    expect(mobileMenu).toBeTruthy();
    expect(within(mobileMenu).getByText("Menu")).toBeTruthy();
    expect(mobileMenu.querySelector('a[href="#services"]')).toBeTruthy();
    expect(mobileMenu.querySelector('a[href="#faq"]')).toBeTruthy();
  });
});
