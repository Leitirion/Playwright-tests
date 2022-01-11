import { test } from "@playwright/test";
import { Schemas } from "../pages/schemas";

test.describe("ui tests for schemas page", () => {
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
