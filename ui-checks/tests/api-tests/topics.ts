import { test, expect } from "@playwright/test";
import { BaseClass } from "../../base/base";
import { Topics } from "../../pages/topics";

test.describe("api tests for dashboard page", () => {
  const base = new BaseClass();
  test.base;
  //Create
  test("Create topic in topics page and get API response", async ({
    request,
  }) => {
    const url = "http://localhost:8080/api/clusters/local/topics";
    const _response = await request.post(`${url}`, {
      data: {
        name: "123.topic",
        partitions: 1,
        replicationFactor: 1,
        configs: {},
      },
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    console.log(await JSON.stringify(_response));
  });
  //Get
  // test("Reload main page and get API response", async ({ request }) => {
  //   console.log(await JSON.stringify(_response));
  // });
  // //Update
  // test("Reload main page and get API response", async ({ request }) => {
  //   console.log(await JSON.stringify(_response));
  // });
  // //Delete
  // test("Reload main page and get API response", async ({ request }) => {
  //   console.log(await JSON.stringify(_response));
});
