'use strict';

const mbv = require('./multi-bracket-validation.js');

describe('Testing functionality and accuracy of multiBracketValidation(strIn)...', () => {

  const badStr1 = 'ab[4rf(gr(aefae4{true)}ae84i,.-=+`\avi[948-]vsu)nuv   aidun nn]iiha89\\\\\\';
  const badStr2 = 'ab[4rf(gr(aefae4{true)}ae84i,.-=+`\avi[948-]vsu)nu)v   aidun nn]iiha89\\\\\\';
  const goodStr1 = 'ab[4rf(gr(aefae4{true})ae84i,.-=+`\avi[948-]vsu)nuv   aidun nn]iiha89\\\\\\';
  const emptyStr = '';
  const noBrackStr = 'abudla8vf0a..aodih ;asodiv ;';

  // Happy Path
  describe('... we should be returned true when...', () => {

    it('... we provide a string with a balanced bracket stack', () => {
      expect(mbv.multiBracketValidation(goodStr1)).toStrictEqual(true);
    });

    it('... we provide a non-empty string that contains no brackets', () => {
      expect(mbv.multiBracketValidation(noBrackStr)).toStrictEqual(true);
    });
    
  });
  
  // Expected Failure
  describe('... we should be thrown a helpful error when...', () => {

    it('... the input string contains brackets stacked out of order', () => {
      expect(() => {mbv.multiBracketValidation(badStr1)}).toThrowError('stack error');
    });
  
    it('... the input string contains an uneven quantity of brackets', () => {
      expect(() => {mbv.multiBracketValidation(badStr2)}).toThrowError('balance error');
    });

  });

  // Edge cases
  describe('... in some edge cases, we should expect...', () => {

    it('... to be thrown a helpful error when the input string is empty', () => {
      expect(() => {mbv.multiBracketValidation(emptyStr)}).toThrowError('input empty');
    });
    
    it('... to be trown an error prompting for a string if there is no argument given', () => {
      expect(() => {mbv.multiBracketValidation()}).toThrowError('missing argument');
    });

    it('... to be trown an error prompting for a string if the given argument is not a string', () => {
      expect(() => {mbv.multiBracketValidation(77)}).toThrowError('input must be string');
    });

  });

});