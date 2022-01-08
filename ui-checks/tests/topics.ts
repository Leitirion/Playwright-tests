import { test } from "@playwright/test";
import { BaseClass } from "../base/base";
import { Topics } from "../pages/topics";

test.describe("ui tests for topics page", () => {
  const base = new BaseClass();
  test.base;
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
