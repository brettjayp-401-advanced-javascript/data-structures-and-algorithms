'use strict';

const shift = require('./array-shift.js');

let array = [2, 5, 9, 'bar', 3, 'foo'];

describe('Functionality testing of insertShiftArray(arr, input). The function should...', () => {
  it('increase the length of the array by one.', () => {
    expect(shift.insertShiftArray(array, 7).length).toStrictEqual(7);
  });

  it('return an array with the new value at the middle and following values shifted, not missing any.', () => {
    expect(shift.insertShiftArray(array, 7)).toStrictEqual([2, 5, 9, 7, 'bar', 3, 'foo']);
  });
});

describe('Functionality test of removeShiftArray(arr). The function should...', () => {
  it('decrease the length of the array by one.', () => {
    expect(shift.removeShiftArray(array).length).toStrictEqual(5);
  });

  it('returns an array with the middle value removed, following values shifted in, with no unexpected undefined or null values.', () => {
    expect(shift.removeShiftArray(array)).toStrictEqual([2, 5, 9, 3, 'foo']);
  });
});