import { test, expect } from "@playwright/test";
import { BaseClass } from "../base/base";

test.describe("Main page test", () => {
  const base = new BaseClass();
  test.base;
  test("for check main page buttons and texts on playwright.dev", async ({
    page,
  }) => {
    const baseClass = new BaseClass(page);
    await baseClass.goToPlaywright();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator("text=Get Started").first()).toHaveAttribute(
      "href",
      "/docs/intro"
    );
    await page.click("text=Get Started");
    // Expect some text to be visible on the page.
    await expect(page.locator("text=Introduction").first()).toBeVisible();
  });
});
