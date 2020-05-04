'use strict';

const binarySearch = (arr, key) => {
  const arrSize = arr.length;
  let slice = 2;
  let midVal = arr[Math.floor(arrSize / slice)];
  let min = max = 0;

  if(typeof key !== 'number'){
    console.log(`The value ${key} is not a number.`);
    return -1;
  }else if(key < arr[0] || key > arr[arr.length - 1]){
    return -1;
  }else if(midVal === key){
    return Math.floor(arrSize / slice);
  }else if(key < midVal){
    return searchBottom(arr, key, arrSize, slice, min, max);
  }else if(key > midVal){
    return searchTop(arr, key, arrSize, slice, min, max);
  }else{
    console.log('Whoa something went wrong!');
    return -1;
  };

};

const searchBottom = (arr, key, arrSize, slice, min, max) => {
  while(arr[Math.floor(arrSize / slice)] > key){
    ++slice;
  };
  min = Math.floor(arrSize / slice);
  max = Math.floor(arrSize / (slice - 1));
  while(arr[min] != key && min < max){
    ++min;
  };

  return actionsOn(arr, key, min);
};

const searchTop = (arr, key, arrSize, slice, min, max) => {
  while(arr[arrSize - Math.floor(arrSize / slice)] < key){
    ++slice;
  };
  min = Math.floor(arrSize - arrSize / (slice - 1));
  max = Math.floor(arrSize - arrSize / slice);
  while(arr[min] != key && min <= max){
    ++min;
  };

  return actionsOn(arr, key, min);
};

const actionsOn = (arr, key, min) => {
  if(arr[min] === key){
    return min;
  }else{
    return -1;
  };
};

module.exports = {binarySearch};