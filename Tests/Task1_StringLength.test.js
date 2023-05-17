const { expect } = require('@jest/globals');
const stringLength = require('../Tasks/Task1_StringLength');

test('adds 1 + 2 to equal 3', () => {
  expect(stringLength('123')).toBe(3);
});

describe('1 <= stringLenght <= 10', () =>{
  test('greater than one', () => {
    expect(stringLength('1')).toBeGreaterThanOrEqual(1);
  });
  test('lest than or equal one', () => {
    expect(stringLength('123456789')).toBeLessThanOrEqual(10);
  })
})

test('string less than 1', () => {
  expect(() => 
  { stringLength('') })
  .toThrow(Error('String is too short'));
})