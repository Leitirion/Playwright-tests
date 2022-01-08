import { expect, Locator, Page } from "@playwright/test";

export class Dashboard {
  readonly page: Page;
  readonly locator: Locator;

  constructor(page: Page, locator: Locator) {
    this.page = page;
    this.expectLocator = page.locator("//head/title");
  }
  async goto() {
    await this.page.goto("");
  }
}
