import { test } from "@playwright/test";
import { Brokers } from "../pages/brokers";

test.describe("ui tests for brokers page", () => {
  test(`open direct brokers url with local cluster and check page's title`, async ({
    page,
  }) => {
    const brokers = new Brokers(page);
    await brokers.goToFirstLocal();
    await brokers.isOnPage();
  });
  test(`open direct brokers url with secondLocal cluster and check page's title`, async ({
    page,
  }) => {
    const brokers = new Brokers(page);
    await brokers.goToSecondLocal();
    await brokers.isOnPage();
  });
});
