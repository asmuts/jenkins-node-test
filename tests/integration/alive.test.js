const request = require("supertest");
const app = require("../../index.js");

module.exports = {
  testEnvironment: "node",
};

describe("GET /", () => {
  it("should respond with Jenkins Node Test App", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    //console.log(res);
    expect(res.body.message).toMatch(/Jenkins Node Test App/);
  });
});
