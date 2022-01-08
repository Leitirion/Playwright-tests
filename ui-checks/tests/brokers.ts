import { test } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Brokers } from "../pages/brokers";

test.describe("ui tests for brokers page", () => {
  const base = new BaseClass();
  test.base;
  test(`open direct brokers url with local cluster and check page's title`, async ({
    page,
  }) => {
    const brokers = new Brokers(page);
    await brokers.goToFirstLocal();
    await brokers.is_on_page();
  });
  test(`open direct brokers url with secondLocal cluster and check page's title`, async ({
    page,
  }) => {
    const brokers2 = new Brokers(page);
    await brokers2.goToSecondLocal();
    await brokers2.is_on_page();
  });
});
