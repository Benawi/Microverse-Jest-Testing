const { expect } = require('@jest/globals');
const calculator = require('../Tasks/Task3_calculator.js');

describe('sum tests', () => {
  describe('Sum of positive numbers', () => {
    test('2 + 2 = 4', () => {
      expect(calculator.add(2, 2)).toBe(4) });
    test('5 + 2 = 7', () => {
      expect(calculator.add(5, 2)).toBe(7) });
    test('15 + 20 = 35', () => {
      expect(calculator.add(15, 20)).toBe(35) });
  });
  describe('Sum of negative numbers', () => {
    test('-2 + -2 = -4', () => {
      expect(calculator.add(-2, -2)).toBe(-4) });
    test('-5 + -2 = -7', () => {
      expect(calculator.add(-5, -2)).toBe(-7) });
    test('-17 + -8 = -25', () => {
      expect(calculator.add(-17, -8)).toBe(-25) });
  });
  describe('Sum of negative and positive numbers', () => {
    test('2 + -2 = 0', () => {
      expect(calculator.add(2, -2)).toBe(0) });
    test('5 + -2 = 3', () => {
      expect(calculator.add(5, -2)).toBe(3) });
    test('-17 + 8 = -9', () => {
      expect(calculator.add(-17, 8)).toBe(-9) });
  });
});

describe('subtract tests', () => {
  describe('subtraction of positive numbers', () => {
    test('2 - 2 = 0', () => {
      expect(calculator.subtract(2, 2)).toBe(0) });
    test('5 - 2 = 3', () => {
      expect(calculator.subtract(5, 2)).toBe(3) });
    test('15 - 20 = -5', () => {
      expect(calculator.subtract(15, 20)).toBe(-5) });
  });
  describe('subtraction of negative numbers', () => {
    test('-2 - -2 = 0', () => {
      expect(calculator.subtract(-2, -2)).toBe(0) });
    test('-5 - -2 = -3', () => {
      expect(calculator.subtract(-5, -2)).toBe(-3) });
    test('-15 - -20 = 5', () => {
      expect(calculator.subtract(-15, -20)).toBe(5) });
  });
  describe('Subtraction of positive and negative numbers', () => {
    test('2 - -2 = 4', () => {
      expect(calculator.subtract(2, -2)).toBe(4) });
    test('-5 - 2 = -7', () => {
      expect(calculator.subtract(-5, 2)).toBe(-7) });
    test('15 - -20 = 35', () => {
      expect(calculator.subtract(15, -20)).toBe(35) });
  });
});

describe('divide tests', () => {
  describe('division tests', () => {
    test('2 / 0 === Error(Dividend is equal to zero)', () => {
      expect(() => calculator.divide(2, 0))
      .toThrow(Error('Dividend is equal to zero')) });
    test('0 / 2 = 0', () => {
      expect(calculator.divide(0, 2)).toBe(0) });
    test('15 / 5 = 3', () => {
      expect(calculator.divide(15, 5)).toBe(3) });
  });
});

describe('multiply tests', () => {
  describe('Multiplication Tests', () => {
    test('2 * 0 === 0', () => {
      expect(calculator.multiply(2, 0)).toBe(0) });
    test('5 * 1 = 1', () => {
      expect(calculator.multiply(5, 1)).toBe(5) });
    test('125 * 125 = 15,625', () => {
      expect(calculator.multiply(125, 125)).toBe(15625) });
  });
});