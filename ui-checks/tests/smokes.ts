import { test, expect } from "@playwright/test";
import { BaseClass } from "../base/base";
import { BasePage } from "../pages/base-page";

test.describe("Smokes tests for kafka-ui", () => {
  const base = new BaseClass();
  test.base;
  test.beforeEach(async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.goto();
  });
  test("go to main page page and check title", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.titleIsOnPage();
  });
  test("go to main page page and check nav button text", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.navButtonTextIsOnPage();
  });
  test("go to main page page and check Online title", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.OnlineTitleIsOnPage();
  });
  test("go to main page page and check Offline title", async ({ page }) => {
    const mainPage = new BasePage(page);
    await mainPage.OfflineTitleIsOnPage();
  });
  test("go to main page page and check dashboard menuitem on page", async ({
    page,
  }) => {
    const mainPage = new BasePage(page);
    await mainPage.menuBarDashboardIsOnPage();
  });
  test("go to main page page and check checkbox Only offline clusters", async ({
    page,
  }) => {
    const mainPage = new BasePage(page);
    await mainPage.checkboxIsOnPage();
  });
});