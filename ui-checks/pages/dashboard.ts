import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class Dashboard extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async isOnPage() {
    const titleOfPage = this.page.locator("//a[@title='Dashboard']");
    await expect(titleOfPage).toHaveText("Dashboard");
    await expect(titleOfPage).toBeVisible();
    return this;
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
    await expect(checkbox).toBeVisible();
    await this.page.dblclick("//main//label//span");
    await expect(table).toContainText(columns);
  }
}
