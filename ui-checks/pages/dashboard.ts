import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class Dashboard extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async is_on_page() {
    const titleOfPage = this.page.locator("//a[@title='Dashboard']");
    await expect(titleOfPage).toHaveText("Dashboard");
    await expect(titleOfPage).toBeVisible();
    return this;
  }
}
