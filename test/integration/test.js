const request = require("supertest");
let server;

describe("/search", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(() => {
    server.close();
  });
  describe("GET /", () => {
    test("should return 200 staus code", async () => {
      const res = await request(server).get("/search/?text=sore throat");
      expect(res.status).toBe(200);
    });

    test("should return status code 400 for bad requestg", async () => {
      const res = await request(server).get("/search/");
      expect(res.status).toBe(400);
    });

    test("should return matching words", async () => {
      const res = await request(server).get(
        "/search/?text=I have a sore throat and headache"
      );
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body).toContain("sore throat");
      expect(res.body).toContain("headache");
    });
  });
});
