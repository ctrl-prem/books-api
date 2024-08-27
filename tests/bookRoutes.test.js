const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

// Test suite for book routes
describe('Book API', () => {
    beforeAll(async () => {
        // Connect to the test database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    afterAll(async () => {
        // Disconnect from the test database
        await mongoose.connection.close();
    });

    it('should create a new book', async () => {
        const res = await request(app)
            .post('/api/books')
            .send({
                title: 'Test Book',
                author: 'Test Author',
                isbn: '1234567890'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    it('should get all books', async () => {
        const res = await request(app).get('/api/books');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    // More tests for other CRUD operations...
});
