'use strict';

const insertShiftArray = (arr, input) => {
  let sArr = new Array(arr.length + 1);
  let middle = Math.ceil(arr.length / 2);
  arr.forEach((val, ind, self) => {
    if(ind < middle){
      sArr[ind] = val;
    }else if(ind == middle){
      sArr[ind] = input;
    }else if(ind === arr.length - 1){
      sArr[ind] = self[ind - 1];
      sArr[ind + 1] = self[ind];
    }else{
      sArr[ind] = self[ind - 1];
    };
  });
  return sArr;
};

const removeShiftArray = arr => {
  const sArr = new Array(arr.length - 1);
  const middle = Math.floor(arr.length / 2);
  arr.forEach((val, ind, self) => {
    if(ind < middle){
      sArr[ind] = val;
    }else if(ind === arr.length - 1){
      ;
    }else{
      sArr[ind] = self[ind + 1];
    };
  });
  return sArr;
};

module.exports = {insertShiftArray, removeShiftArray};