import { test } from "@playwright/test";
import { BasePage } from "../../pages/base-page";

test.describe("api tests for dashboard page", () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
  });
  test("Reload main page and get API response", async ({ page }) => {
    const response = await Promise.all([
      page.click('//*[@id="root"]//nav//a[text()="UI for Apache Kafka"]'),
      page.waitForResponse((res) => res.status() == 200),
    ]);
    console.log(JSON.stringify(response, null, "\t"));
  });
});
