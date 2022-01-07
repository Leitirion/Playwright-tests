import { chromium, Browser, Page, test } from "@playwright/test";

export class BaseClass {
  readonly page: Page;
  readonly browser: Browser;

  constructor(page: Page, browser: Browser) {
    this.page = page;
    this.browser = browser;
  }
  async base() {
    test.beforeAll(async () => {
      const browser = await chromium.launch();
      console.log("Hi!");
    });
    test.afterAll(async () => {
      await browser.close();
    });
    test.beforeEach(async () => {
      const page = await browser.newPage();
    });
    test.afterEach(async () => {
      await page.close();
    });
  }
  async goto() {
    await this.page.goto("");
  }
  async goToPlaywright() {
    await this.page.goto("https://playwright.dev");
  }
}
