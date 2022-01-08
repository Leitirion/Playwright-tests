import { test } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Connectors } from "../pages/connectors";

test.describe("ui tests for connectors page", () => {
  const base = new BaseClass();
  test.base;
  test(`open direct connectors url with local cluster and check page's title`, async ({
    page,
  }) => {
    const connectors = new Connectors(page);
    await connectors.goToFirstLocal();
    await connectors.isOnPage();
  });
  test(`open direct connectors url with secondLocal cluster and check page's title`, async ({
    page,
  }) => {
    const connectors = new Connectors(page);
    await connectors.goToSecondLocal();
    await connectors.isOnPage();
  });
});
