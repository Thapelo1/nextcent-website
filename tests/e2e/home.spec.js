import { expect, test } from "@playwright/test";

test("home page loads with its main heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Lessons and insights from 8 years" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Our clients" })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Manage your entire community in a single system",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "The unseen of spending three years at Pixelgrade",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Helping a local business reinvent itself" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Meet our customers" }),
  ).toBeAttached();
  await expect(
    page.getByRole("heading", { name: "Caring is the new marketing" }),
  ).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(6);
  await expect(
    page.getByRole("heading", { name: "Pellentesque suscipit fringilla libero eu." }),
  ).toBeVisible();
});

test("navigation and registration links reach their page sections", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Home", exact: true }).click();
  await expect(page).toHaveURL(/#home$/);

  await page.getByRole("link", { name: "Service", exact: true }).click();
  await expect(page).toHaveURL(/#services$/);
  await expect(
    page.getByRole("heading", {
      name: "Manage your entire community in a single system",
    }),
  ).toBeInViewport();

  await page.getByRole("link", { name: "Feature", exact: true }).click();
  await expect(page).toHaveURL(/#features$/);
  await expect(
    page.getByRole("heading", {
      name: "The unseen of spending three years at Pixelgrade",
    }),
  ).toBeInViewport();

  await page.getByRole("link", { name: "Register", exact: true }).click();
  await expect(page).toHaveURL(/#register$/);
  await expect(
    page.getByRole("heading", {
      name: "Pellentesque suscipit fringilla libero eu.",
    }),
  ).toBeInViewport();
});

test("the full page remains usable on a narrow screen", async ({ page }) => {
  for (const width of [375, 507]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");

    const navigation = page.getByRole("navigation", {
      name: "Main navigation",
    });
    const menuButton = navigation.getByText("Menu");
    const mobileFaqLink = navigation.locator(".mobile-menu__links").getByRole(
      "link",
      { name: "FAQ", exact: true },
    );

    await expect(menuButton).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Sign up" })).toBeVisible();
    await expect(mobileFaqLink).toBeHidden();
    await menuButton.click();
    await expect(mobileFaqLink).toBeVisible();
    await navigation
      .locator(".mobile-menu__links")
      .getByRole("link", { name: "Service", exact: true })
      .click();
    await expect(page).toHaveURL(/#services$/);

    const navBounds = await navigation.boundingBox();
    expect(navBounds.x).toBeGreaterThanOrEqual(0);
    expect(navBounds.x + navBounds.width).toBeLessThanOrEqual(width);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
    await expect(
      page.getByRole("heading", { name: "Our clients" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Company" })).toBeVisible();
  }
});
