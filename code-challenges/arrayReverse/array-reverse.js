'use strict'

const reverseArray = arr => {
  let revArr = [];
  arr.forEach(val => revArr.unshift(val));
  return revArr;
}