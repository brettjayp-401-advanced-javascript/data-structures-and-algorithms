'use strict';

// const binarySearch = (arr, key) => {
//   const arrSize = arr.length;
//   let slice = 2;
//   let midVal = arr[Math.floor(arrSize / slice)];
//   let min = 0;
//   let max = 0;

//   if(typeof key !== 'number'){
//     console.log(`The value ${key} is not a number.`);
//     return -1;
//   }else if(typeof arr !== 'array'){
//     console.log('The input object is not an array.');
//     return -1;
//   }else if(arr.sort() !== arr){
//     console.log('The input array is not a sorted array.')
//   }else if(key < arr[0] || key > arr[arr.length - 1]){
//     return -1;
//   }else if(midVal === key){
//     return Math.floor(arrSize / slice);
//   }else if(key < midVal){
//     return searchBottom(arr, key, arrSize, slice, min, max);
//   }else if(key > midVal){
//     return searchTop(arr, key, arrSize, slice, min, max);
//   }else{
//     console.log('Whoa something went wrong!');
//     return -1;
//   };

// };

const binarySearch = (arr, key) => {

  if(typeof key !== 'number' || typeof arr !== 'object'){
    if(typeof key !== 'number'){
      console.log(`The value ${key} is not a number.`);
      return -1;
    }else if(typeof arr !== 'object'){
      console.log('The input object is not an array.');
      return -1;
    };
  }else{
    let sorted = arr.slice(0);
    sorted = sorted.sort((a,b) => {
      return a - b;
    });
    if(JSON.stringify(sorted) !== JSON.stringify(arr)){
      console.log('The input array is not a sorted array.');
      return -1;
    };
  };

  const arrSize = arr.length;
  let slice = 2;
  let midVal = arr[Math.floor(arrSize / slice)];
  let min = 0;
  let max = 0;

  if(key < arr[0] || key > arr[arr.length - 1]){
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