import { test } from "@playwright/test";
import { Topics } from "../pages/topics";

test.describe("ui tests for topics page", () => {
  test(`open direct topics url with local cluster and check page's title`, async ({
    page,
  }) => {
    const topics = new Topics(page);
    await topics.goToFirstLocal();
    await topics.isOnPage();
  });
  test(`open direct topics url with secondLocal cluster and check page's title`, async ({
    page,
  }) => {
    const topics = new Topics(page);
    await topics.goToSecondLocal();
    await topics.isOnPage();
  });
});
