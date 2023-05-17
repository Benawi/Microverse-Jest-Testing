const { expect } = require('@jest/globals');
const capitalizer = require('../Tasks/Task4_Capitalize.js');

test('Capitalization test', () => 
  {
    let testString = 'benawi';
    let capitalizeLeter = 'Benawi';

    expect(capitalizer(testString)).toEqual(capitalizeLeter);
  }
);