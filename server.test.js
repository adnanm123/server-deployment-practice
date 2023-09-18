const supertest = require('supertest');
const app = require('./server.js');
const request = supertest(app);

describe('Testing the server module', () => {

  test('Should return a multiply as a response', async () => {
    let response = await request.get('/multiply?value1=5&value2=5');
  
    expect(response.status).toEqual(200);
    expect(response.body.results).toEqual(25);
  });
});
