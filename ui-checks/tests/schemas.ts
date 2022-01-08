import { test } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Schemas } from "../pages/schemas";

test.describe("ui tests for schemas page", () => {
  const base = new BaseClass();
  test.base;
  test(`open direct schemas url with local cluster and check page's title`, async ({
    page,
  }) => {
    const schemas = new Schemas(page);
    await schemas.goToFirstLocal();
    await schemas.isOnPage();
  });
  test(`open direct schemas url with secondLocal cluster and check page's title`, async ({
    page,
  }) => {
    const schemas = new Schemas(page);
    await schemas.goToSecondLocal();
    await schemas.isOnPage();
  });
});
