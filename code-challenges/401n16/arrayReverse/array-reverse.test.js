'use strict';

const rArr = require('./array-reverse.js');

const array = [3, {'b': false}, 'fizzbuzz', 'foo', 5];

describe('reverseArray(arr) will return the input array in reverse.', () => {
  it('Will return <array> reversed.', () => {
    // console.log(rArr.reverseArray(array));
    expect(rArr.reverseArray(array)).toStrictEqual([5, 'foo', 'fizzbuzz', {'b': false}, 3]);
  });
});