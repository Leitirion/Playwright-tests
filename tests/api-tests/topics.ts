import { test, expect } from "@playwright/test";

const topicName = "new.topic";
const url = "http://localhost:8080/api/clusters/local/topics";
test.describe("api tests for dashboard page", () => {
  //Create
  test("Create topic in topics page and get API response", async ({
    request,
  }) => {
    const newResponse = await request.post(`${url}`, {
      data: {
        name: topicName,
        partitions: 1,
        replicationFactor: 1,
        configs: {},
      },
    });
<<<<<<< HEAD
    expect(await newResponse.ok()).toBeTruthy();
    console.log(await newResponse.json());
    //Get
=======
    expect(await response.ok()).toBeTruthy();
    console.log(await response.json());
    const res = await response.json;
    topic = res.name;
>>>>>>> 869672b045d74611271cdf1e5cabeef77234befe
  });
  //Get
  test("Use get request to check topic's name", async ({ request }) => {
    const response = await request.get(`${url}/${topicName}`);
    expect(response.ok()).toBeTruthy();
    expect((await response.json()).name).toEqual(topicName);
    console.log(await response.json());
  });
  //Update
//   test("Patch(Modify) topic parameters", async ({ request }) => {
//     const response = await request.patch(`${url}/${topicName}`, {
//       data: {
//         name: topicName,
//         partitions: 1,
//         replicationFactor: 1,
//         configs: {},
//       },
//     });
//     expect(await response.ok()).toBeTruthy();
//     console.log(await response.json());
  });
  //   Delete;
  test("Delete topic", async ({ request }) => {
    const response = await request.delete(`${url}/${topicName}`);
    expect(await response.ok()).toBeTruthy();
  });
});
