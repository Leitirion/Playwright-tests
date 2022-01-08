import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class Brokers extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async is_on_page() {
    const titleOfPage = this.page.locator("//main//h1");
    await expect(titleOfPage).toHaveText("Brokers");
    await expect(titleOfPage).toBeVisible();
    return this;
  }
  async goToFirstLocal() {
    const cluster1 = "secondLocal";
    await this.page.goto(`/ui/clusters/${cluster1}/brokers`);
  }
  async goToSecondLocal() {
    const cluster2 = "secondLocal";
    await this.page.goto(`/ui/clusters/${cluster2}/brokers`);
  }
}
