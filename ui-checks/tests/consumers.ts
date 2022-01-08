import { test } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Consumers } from "../pages/consumers";

test.describe("ui tests for consumers page", () => {
  const base = new BaseClass();
  test.base;
  test(`open direct consumers url with local cluster and check page's title`, async ({
    page,
  }) => {
    const consumers = new Consumers(page);
    await consumers.goToFirstLocal();
    await consumers.isOnPage();
  });
  test(`open direct consumers url with secondLocal cluster and check page's title`, async ({
    page,
  }) => {
    const consumers = new Consumers(page);
    await consumers.goToSecondLocal();
    await consumers.isOnPage();
  });
});
