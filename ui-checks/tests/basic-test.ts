import { test, expect } from "@playwright/test";
import { BaseClass } from "../base/base";
test.describe("basic test", () => {
  const base = new BaseClass();
  test.base;
  test("that page have title on playwright.dev", async ({ page }) => {
    const baseClass = new BaseClass(page);
    await baseClass.goToPlaywright();
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText("Playwright");
  });
});
