import { Page, test as base } from "@playwright/test";
import { Dashboard } from "../pages/dashboard";
export abstract class BasePage<T extends BasePage<T>> {
  protected readonly baseURL: string;
  protected page: Page;
  protected path: string;

  constructor(baseURL: string, page: Page, path: string = "") {
    this.page = page;
    this.baseURL = baseURL;
    this.path = path;
  }
  async goto() {
    await this.page.goto(this.baseURL);
  }
  abstract is_on_page(): Promise<T>;
}
type Fixture = {
  dashboard: Dashboard;
};
export const test = base.extend<Fixture>({
  dashboard: async ({ baseURL, page }, use) => {
    await use(new Dashboard(baseURL, page));
  },
});
