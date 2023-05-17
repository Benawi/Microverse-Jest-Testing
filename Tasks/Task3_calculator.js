class SCalc {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static divide (a, b) {
      if (b === 0) {
        throw new Error('Dividend is equal to zero');
      }
  
      return a / b;
    }
  
    static multiply (a, b) {
      return a * b;
    }
  }
  
  module.exports = SCalc;