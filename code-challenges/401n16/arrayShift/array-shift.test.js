'use strict';

const shift = require('./array-shift.js');

let array = [2, 5, 9, 'bar', 3, 'foo'];

describe('Functionality testing of insertShiftArray(arr, input). The function should...', () => {
  it('increase the length of the array by one.', () => {
    expect(shift.insertShiftArray(array, 7).length).toStrictEqual(7);
  });

  it('place the new value at the middle.', () => {
    expect(shift.insertShiftArray(array, 7)).toStrictEqual([2, 5, 9, 7, 'bar', 3, 'foo']);
  });
});