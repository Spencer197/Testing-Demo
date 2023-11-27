const exercise1 = require('../exercise1');

const { fizzBuzz } = require('../exercise1'); // Replace 'yourModule' with the actual module path

describe('fizzBuzz', () => {
  it('should return "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    // Add more test cases as needed
  });

  it('should return "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    // Add more test cases as needed
  });

  it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    // Add more test cases as needed
  });

  it('should return the input number for non-multiples of 3 and 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(7)).toBe(7);
    // Add more test cases as needed
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => fizzBuzz('not a number')).toThrow('Input should be a number.');
    expect(() => fizzBuzz(null)).toThrow('Input should be a number.');
    // Add more test cases as needed
  });
});
