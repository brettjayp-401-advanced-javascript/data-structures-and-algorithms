'use strict';

const populate = () => {
  const arr100 = [];
  const arr1k = [];
  const arr10k = [];
  const arr100k = [];
  
  while(arr100.length < 99){
    arr100.push(Math.floor(Math.random() * 10000));
  };
  arr100.push(555);
  arr100.sort((a,b) => {
    return a - b;
  });
  
  while(arr1k.length < 999){
    arr100.forEach(val => {
      arr1k.push(val);
    });
  };
  arr1k.push(9733);
  arr1k.sort((a,b) => {
    return a - b;
  });
  
  while(arr10k.length < 9999){
    arr1k.forEach(val => {
      arr10k.push(val);
    });
  };
  arr10k.push(388);
  arr10k.sort((a,b) => {
    return a - b;
  });
  
  while(arr100k.length < 99999){
    arr10k.forEach(val => {
      arr100k.push(val);
    });
  };
  arr100k.push(7100)
  arr100k.sort((a,b) => {
    return a - b;
  });

  return [arr100, arr1k, arr10k, arr100k];

};

module.exports = {populate};