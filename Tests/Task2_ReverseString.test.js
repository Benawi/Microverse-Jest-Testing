const { expect } = require('@jest/globals');
const reverseString = require('../Tasks/Task2_ReverseString');

test('reverse string that is not empty', () => {
  expect(reverseString('abc')).toBe('cba');
})

test('reverse empty string', () => 
  expect(reverseString('')).toBe('')
)