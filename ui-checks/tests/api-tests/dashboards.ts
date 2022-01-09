import { test, expect } from "@playwright/test";
import { BasePage } from "../../pages/base-page";
import { BaseClass } from "../../base/base";

test.describe("api tests for dashboard page", () => {
  const base = new BaseClass();
  test.base;
  test.beforeEach(async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
  });
  test("Reload main page and get API response", async ({ page }) => {
    const _response = await Promise.all([
      page.waitForResponse((res) => res.status() == 200),
      page.click('//*[@id="root"]//nav//a[text()="UI for Apache Kafka"]'),
      page.waitForResponse((res) => res.status() == 200),
    ]);
    console.log(await JSON.stringify(_response));
  });
});
