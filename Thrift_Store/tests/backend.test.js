// backend.test.js
const request = require('supertest');
const mongoose = require("mongoose");
const app = require('../index');

describe('Backend API Test', () => {
    let server;    

    beforeAll((done) => {
        server = app.listen(5000, done);
    });

    afterAll(async () => {
        await mongoose.disconnect(); 
        if (server) {
            server.close();
        }
    });

    test('GET /api/status should return 200 and a correct response body', async () => {
        const response = await request(server).get('/api/status');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: true,
            message: 'Backend is up and running'
        });
    });
});
