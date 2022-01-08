import { test, expect } from "@playwright/test";
import { BaseClass } from "../base/base";
import { BasePage } from "../pages/base-page";

test.describe("Smokes tests for kafka-ui", () => {
  const base = new BaseClass();
  test.base;
  test("go to mainPage page and check title", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
    await mainPage.titleIsOnPage();
  });
  test("go to mainPage page and check nav button text", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
    await mainPage.navButtonTextIsOnPage();
  });
  test("go to mainPage page and check Online title", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
    await mainPage.OnlineTitleIsOnPage();
  });
  test("go to mainPage page and check Offline title", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
    await mainPage.OfflineTitleIsOnPage();
  });
});
