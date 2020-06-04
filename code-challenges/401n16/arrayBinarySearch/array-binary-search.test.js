'use strict';

// const arrLarge = require('./objectStore.js');
const search = require('./array-binary-search.js');
const array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010, 1111, 1212, 1313, 1414, 1515, 1616, 1717, 1818];
const notSorted = [11, 1818, 33, 99, 55, 66, 77, 88, 44, 1010, 1111, 11, 1313, 1414, 1515, 1616, 1717, 1818];

describe('The function should accept an array and a key, and...', () => {
  
  // Happy path
  it('return the found position (4) of the key (55) in the array.', () => {
    expect(search.binarySearch(array, 55)).toStrictEqual(4);
  });
  it('return the found position (17) of the key (1818) in the array.', () => {
    expect(search.binarySearch(array, 1818)).toStrictEqual(17);
  });
  it('return the found position (9) of the key (1010) in the array.', () => {
    expect(search.binarySearch(array, 1010)).toStrictEqual(9);
  });

  // Expected failure
  it('return a not found value (-1) for the key (989898) in the array.', () => {
    expect(search.binarySearch(array, 989898)).toStrictEqual(-1);
  });
  it('return a not found value (-1) for the key (2) in the array.', () => {
    expect(search.binarySearch(array, 2)).toStrictEqual(-1);
  });

  // Edge case (if applicable / obvious)
  it('return a not found value (-1) for the non-number key (\'a\') in the array', () => {
    expect(search.binarySearch(array, 'a')).toStrictEqual(-1);
  });
  it('return a not found value (-1) for the non-array parameter (\'string\')', () => {
    expect(search.binarySearch('string', 4)).toStrictEqual(-1);
  });
  it('return a not found value (-1) for the key (55) in the non-sorted array.', () => {
    expect(search.binarySearch(notSorted, 55)).toStrictEqual(-1);
  });

});