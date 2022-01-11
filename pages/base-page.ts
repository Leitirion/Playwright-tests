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
  async menuBarDashboardIsOnPage() {
    const menuBar = this.page.locator("//main//a[@title='Dashboard']");
    await expect(menuBar).toBeVisible();
  }
  async checkboxIsOnPage() {
    const checkbox = this.page.locator("//main//label//span");
    const table = this.page.locator("//table//thead//tr");
    const columns = [
      ("Cluster name",
      "Version",
      "Brokers count",
      "Partitions",
      "Topics",
      "Production",
      "Consumption"),
    ];
    await expect(
      this.page.locator("//main//span[text()='Only offline clusters']")
    ).toBeVisible();
    await expect(checkbox).toBeVisible();
    await expect(table).toContainText(columns);
    //     await this.page.click("//main//label//span");
  }
}
