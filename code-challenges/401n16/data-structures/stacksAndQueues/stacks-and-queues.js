'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  };
};

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  };

  push(val){
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  };

  pop(){
    try {
      if(this.size === 0){throw 'size is 0'};
      this.top = this.top.next;
    }
    catch(e){
      console.log(e);
      return e;
    }
  };
};


module.exports = {Node, Stack};