const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');  // import your server

describe("API Tests", () => {
    it("GET / should return status ok", async () => {
        const res = await request(app).get("/");
        expect(res.status).to.equal(200);
    });
});
