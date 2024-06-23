const request = require('supertest');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../src/models/userModel');
const app = require('../src/app');

// Load environment variables
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); // Check the MONGO_URI value

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/worko/user')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo') // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo with a valid token
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 25,
        city: 'Test City',
        zipCode: '12345'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should get all users', async () => {
    const user = new User({
      email: 'test2@example.com',
      name: 'Test User 2',
      age: 30,
      city: 'Test City',
      zipCode: '67890'
    });
    await user.save();

    const res = await request(app)
      .get('/worko/user')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo'); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo with a valid token

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty('email', 'test2@example.com');
  });

  it('should get a user by ID', async () => {
    const user = new User({
      email: 'test3@example.com',
      name: 'Test User 3',
      age: 35,
      city: 'Test City',
      zipCode: '54321'
    });
    await user.save();

    const res = await request(app)
      .get(`/worko/user/${user._id}`)
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo'); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo with a valid token

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'test3@example.com');
  });

  it('should update a user', async () => {
    const user = new User({
      email: 'test4@example.com',
      name: 'Test User 4',
      age: 40,
      city: 'Test City',
      zipCode: '65432'
    });
    await user.save();
    const res = await request(app)
      .put(`/worko/user/${user._id}`)
      .send({
      email: 'test4@example.com',
        name: 'Updated Test User 4',
        age: 45,
      city: 'Test City',
      zipCode: '65432'

      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated Test User 4');
    expect(res.body).toHaveProperty('age', 45);
  });

  it('should delete a user', async () => {
    const user = new User({
      email: 'test5@example.com',
      name: 'Test User 5',
      age: 50,
      city: 'Test City',
      zipCode: '76543'
    });
    await user.save();

    const res = await request(app)
      .delete(`/worko/user/${user._id}`)
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo'); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc4MTFkYWMwNjJkNTk4NDBiMDYzMzAiLCJpYXQiOjE3MTkxNDQ5MjIsImV4cCI6MTcxOTE0ODUyMn0.AjyUFWsahGgDfDO_BKavCZAwWNli3EMagbjF-4ceIPo with a valid token

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'test5@example.com');

    const deletedUser = await User.findById(user._id);
    expect(deletedUser.deleted).toBe(true);
  });
});
