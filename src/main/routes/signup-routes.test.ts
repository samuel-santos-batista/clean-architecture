import request from 'supertest'
import app from '../config/app'


describe('SignUp Routes', () => {
  test('Should return an accauntt on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Samuel',
        email: 'samuelsantxxi@gmail.com',
        password: '123',
        passwordConfirmation: '123',
      })
      .expect(200)
    })
})