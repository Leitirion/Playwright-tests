import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class Consumers extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async isOnPage() {
    const titleOfPage = this.page.locator("//main//h1");
    await expect(titleOfPage).toHaveText("Consumers");
    await expect(titleOfPage).toBeVisible();
    return this;
  }
  async goToFirstLocal() {
    const cluster1 = "secondLocal";
    await this.page.goto(`/ui/clusters/${cluster1}/consumer-groups`);
  }
  async goToSecondLocal() {
    const cluster2 = "secondLocal";
    await this.page.goto(`/ui/clusters/${cluster2}/consumer-groups`);
  }
}
