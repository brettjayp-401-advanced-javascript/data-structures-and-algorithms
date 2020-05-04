'use strict';

const arr100 = [];
const arr1k = [];
const arr10k = [];
const arr100k = [];

while(arr100.length < 100){
  arr100.push(Math.floor(Math.random() * 100));
};
arr100 = arr100.sort();
while(arr1k.length < 1000){
  arr100.push(Math.floor(Math.random() * 100));
};
arr1k = arr1k.sort();
while(arr10k.length < 10000){
  arr100.push(Math.floor(Math.random() * 100));
};
arr10k = arr10k.sort();
while(arr100k.length < 100000){
  arr100.push(Math.floor(Math.random() * 100));
};
arr100k = arr100k.sort();

module.exports = {arr100, arr1k, arr10k, arr100k};