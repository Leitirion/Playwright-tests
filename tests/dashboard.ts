import { test } from "@playwright/test";
import { Dashboard } from "../pages/dashboard";

test.describe("ui tests for dashboard page", () => {
  test("go to page and check page's title", async ({ page }) => {
    const dashboard = new Dashboard(page);
    await dashboard.goto();
    await dashboard.isOnPage();
  });
  test("go to page, click to checkbox and check table", async ({ page }) => {
    const dashboard = new Dashboard(page);
    await dashboard.goto();
    await dashboard.checkboxIsOnPage();
  });
});
