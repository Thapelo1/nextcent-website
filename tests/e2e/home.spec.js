import { expect, test } from "@playwright/test";

test("home page loads with its main heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Lessons and insights from 8 years" }),
  ).toBeVisible();
});

test("navigation and register link reach the community section", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Home", exact: true }).click();
  await expect(page).toHaveURL(/#home$/);

  await page.getByRole("link", { name: "Service", exact: true }).click();
  await expect(page).toHaveURL(/#services$/);
  await expect(
    page.getByRole("heading", { name: "Our trusted community" }),
  ).toBeInViewport();

  await page.getByRole("link", { name: "Register", exact: true }).click();
  await expect(page).toHaveURL(/#services$/);
  await expect(
    page.getByRole("heading", { name: "Our trusted community" }),
  ).toBeInViewport();
});
