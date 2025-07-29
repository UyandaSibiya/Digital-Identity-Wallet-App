const request = require('supertest');
const express = require('express');

// Create a test version of your server
const app = express();
app.use(express.json());

// Copy your API routes here for testing
app.post('/api/login', (req, res) => {
  const { identifier, password } = req.body;
  
  if (identifier && password) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/register', (req, res) => {
  const { email, username, password } = req.body;
  
  if (email && username && password) {
    res.json({ success: true, message: 'Registration successful!' });
  } else {
    res.status(400).json({ success: false, message: 'Missing required fields' });
  }
});

describe('API Endpoints', () => {
  describe('POST /api/login', () => {
    test('should login successfully with valid credentials', async () => {
      const response = await request(app)
        .post('/api/login')
        .send({
          identifier: 'test@example.com',
          password: 'password123'
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Login successful!');
    });

    test('should fail login with missing credentials', async () => {
      const response = await request(app)
        .post('/api/login')
        .send({
          identifier: '',
          password: ''
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Invalid credentials');
    });
  });

  describe('POST /api/register', () => {
    test('should register successfully with valid data', async () => {
      const response = await request(app)
        .post('/api/register')
        .send({
          email: 'test@example.com',
          username: 'testuser',
          password: 'password123'
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Registration successful!');
    });

    test('should fail registration with missing fields', async () => {
      const response = await request(app)
        .post('/api/register')
        .send({
          email: 'test@example.com'
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Missing required fields');
    });
  });
});