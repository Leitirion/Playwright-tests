import { Page, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto("");
  }
  async titleIsOnPage() {
    const title = this.page.locator("//head/title");
    await expect(title).toHaveText("UI for Apache Kafka");
  }
  async navButtonTextIsOnPage() {
    const title = this.page.locator("//nav//a[@href='/ui']");
    await expect(title).toHaveText("UI for Apache Kafka");
    await expect(title).toBeVisible();
  }
  async OnlineTitleIsOnPage() {
    const titleOnline = this.page.locator("//main//p[text()='Online']");
    await expect(titleOnline).toHaveText("Online");
    await expect(titleOnline).toBeVisible();
  }
  async OfflineTitleIsOnPage() {
    const titleOffline = this.page.locator("//main//p[text()='Offline']");
    await expect(titleOffline).toHaveText("Offline");
    await expect(titleOffline).toBeVisible();
  }
}
