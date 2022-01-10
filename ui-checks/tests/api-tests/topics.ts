import { test, expect } from "@playwright/test";
import { BaseClass } from "../../base/base";
import { Topics } from "../../pages/topics";

let _topic: string;
const topicName = "new.topic";
const url = "http://localhost:8080/api/clusters/local/topics";
test.describe("api tests for dashboard page", () => {
  const base = new BaseClass();
  test.base;
  //Create
  test("Create topic in topics page and get API response", async ({
    request,
  }) => {
    const _response = await request.post(`${url}`, {
      data: {
        name: `${topicName}`,
        partitions: 1,
        replicationFactor: 1,
        configs: {},
      },
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    console.log(await _response.json());
    const res = await _response.json;
    _topic = res.name;
  });
  //Get
  test("get API response after creating new topic", async ({ request }) => {
    const _response = await request.get(`${url}`, {
      params: {
        name: _topic,
      },
    });
    expect(_response.status()).toBe(200);
    expect(await _response.ok()).toBeTruthy();
    console.log(await _response.json());
  });
  //Update
  test.only("Patch(Modify) topic", async ({ request }) => {
    const _response = await request.patch(`${url}/${topicName}`, {
      data: {
        cleanUpPolicy: "DELETE",
      },
    });
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
  });
  //   Delete;
  test("Delete topic", async ({ request }) => {
    const _response = await request.delete(`${url}/${topicName}`);
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
  });
});