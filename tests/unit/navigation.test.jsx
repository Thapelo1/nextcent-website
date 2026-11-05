import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navigation from "../../app/navigation";

describe("Navigation", () => {
  it("renders the home link and section navigation", () => {
    render(<Navigation />);

    const navigation = screen.getByRole("navigation", {
      name: "Main navigation",
    });

    expect(
      within(navigation)
        .getByRole("link", { name: "Nextcent home" })
        .getAttribute("href"),
    ).toBe("./");
    expect(
      within(navigation)
        .getByRole("link", { name: "Home" })
        .getAttribute("href"),
    ).toBe("#home");
    expect(
      within(navigation)
        .getByRole("link", { name: "Service" })
        .getAttribute("href"),
    ).toBe("#services");
  });
});
