function stringLength(string) {

    if (string.length < 1) {
      throw new Error('String is too short');
    } 
  
    return string.length;
  }
  
  module.exports = stringLength;