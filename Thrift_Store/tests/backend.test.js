const request = require('supertest');
const mongoose = require("mongoose");
const app = require('../index.js');

describe('Backend API Test', () => {
    test('GET /api/status should return 200 and a correct response body', async () => {
        const response = await request(app).get('/api/status');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: true,
            message: 'Backend is up and running'
        });
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
});
