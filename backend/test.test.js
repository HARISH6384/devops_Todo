const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("./server"); // your express app

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

afterEach(async () => {
    // clear all data after each test
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany();
    }
});

describe("GET /api/todos2", () => {
    it("should return 200", async () => {
        const res = await request(app).get("/api/todos2");
        expect(res.statusCode).toBe(200);
    });
});

describe("POST /api/todos2", () => {
    it("should return 201", async () => {
        const res = await request(app)
            .post("/api/todos2")
            .send({ title: "Test", description: "Test description" });

        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("Test");
    });
});
