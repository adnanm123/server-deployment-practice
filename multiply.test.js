// use the code as we intended.
const multiply = require('./multiply.js');

// built into jest,  used to give developers some justification for what code does.
describe('Testing the multiply package', () => {
  test('Should be able to multiply 2 numbers', () => {
    let result = multiply(5,5);

    expect(result).toEqual(25); // build in functions that jest loads for us.
  });
});
