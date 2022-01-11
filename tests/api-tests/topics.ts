import { test, expect } from "@playwright/test";
import { Topics } from "../../pages/topics";

let topic: string;
const topicName = "new.topic";
const url = "http://localhost:8080/api/clusters/local/topics";
test.describe("api tests for dashboard page", () => {
  //Create
  test("Create topic in topics page and get API response", async ({
    request,
  }) => {
    const response = await request.post(`${url}`, {
      data: {
        name: `${topicName}`,
        partitions: 1,
        replicationFactor: 1,
        configs: {},
      },
    });
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());
    const res = await response.json;
    topic = res.name;
  });
  //Get
  test("get API response after creating new topic", async ({ request }) => {
    const response = await request.get(`${url}`, {
      params: {
        name: topic,
      },
    });
    expect(await response.ok()).toBeTruthy();
    console.log(await response.json());
  });
  //Update
  test.only("Patch(Modify) topic", async ({ request }) => {
    const response = await request.patch(`${url}/${topicName}`, {
      data: {
        cleanUpPolicy: "DELETE",
      },
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });
  //   Delete;
  test("Delete topic", async ({ request }) => {
    const response = await request.delete(`${url}/${topicName}`);
    expect(response.ok()).toBeTruthy();
  });
});
