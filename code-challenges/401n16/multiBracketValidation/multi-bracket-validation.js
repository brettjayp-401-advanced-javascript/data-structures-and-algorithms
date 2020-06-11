'use strict';

const multiBracketValidation = function(strIn){
  if(JSON.stringify(arguments) === '{}'){
    throw 'missing argument';
  }else if(typeof strIn !== 'string'){
    throw 'input must be string';
  };
  let regex = /[^\[^\]^\{^\}^\(^\)]/g;
  let strArr = strIn.replace(regex,'').split('');
  let stack = [];
  let open = ['[', '(', '{'];
  let close = [']', ')', '}'];
  try{
    if(strIn.length === 0){throw 'input empty';};
    if(strArr.length % 2){throw 'balance error';};
    strArr.forEach((val, ind) => {
      if(open.includes(val)){
        stack.push(val);
      }else if(close.indexOf(val) === open.indexOf(stack[stack.length-1])){
        stack.pop();
      }else{
        throw 'stack error';
      };
    });
  }
  catch(e){
    throw e;
  };
  return stack.length ? false : true;
};

module.exports = {multiBracketValidation};