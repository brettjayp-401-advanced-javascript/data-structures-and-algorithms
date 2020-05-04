'use strict';

const insertShiftArray = (arr, input) => {
  let sArr = new Array(arr.length + 1);
  arr.forEach((val, ind, self) => {
    if(ind < Math.ceil(arr.length / 2)){
      sArr[ind] = val;
    }else if(ind == Math.ceil(arr.length / 2)){
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

module.exports = {insertShiftArray};