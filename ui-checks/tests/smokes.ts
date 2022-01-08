import { chromium, Browser, Page, test, expect } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Dashboard } from "../pages/dashboard";

test.describe("Smokes tests for kafka-ui", () => {
  const base = new BaseClass();
  test.base;
  test("got to page and check title", async ({ page }) => {
    const dashboard = new Dashboard(page);
    await dashboard.goto();
    await expect(dashboard.expectLocator).toHaveText("UI for Apache Kafka");
  });
});
