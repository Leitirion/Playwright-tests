import { test, expect } from "@playwright/test";
import { BasePage } from "../../pages/base-page";

test.describe("api test for dashboard page", () => {
  test("Reload main page and get API response", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
    const response = await Promise.all([
      page.click('//*[@id="root"]//nav//a[text()="UI for Apache Kafka"]'),
    ]);
    expect(response.ok()).toBeTruthy();
    console.log(await JSON.stringify(response));
  });
});
