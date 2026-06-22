import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Wade Collins Electric/);
});

test("contact link works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Contact/i }).first().click();
  await expect(page).toHaveURL(/.*contact/);
});
