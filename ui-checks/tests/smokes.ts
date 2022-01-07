import { chromium, Browser, Page, test, expect } from "@playwright/test";
import { BaseClass } from "../base/base";
test.describe("Smokes tests for kafka-ui", () => {
  const base = new BaseClass();
  test.base;
  test("got to page and check title", async ({ page }) => {
    const baseClass = new BaseClass(page);
    //     await base.Base();
    await baseClass.goto();
    await expect(page.locator("//head/title")).toHaveText(
      "UI for Apache Kafka"
    );
  });
});
