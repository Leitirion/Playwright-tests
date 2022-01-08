import { test } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Dashboard } from "../pages/dashboard";

test.describe("ui tests for dashboard page", () => {
  const base = new BaseClass();
  test.base;
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
