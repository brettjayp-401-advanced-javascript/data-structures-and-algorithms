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
      let top = this.top;
      this.top = this.top.next;
      return top.val;
    }
    catch(e){
      throw e;
    };
  };

  peek(){
    try{
      // if(this.size === 0){throw new Error('size is 0')};
      if(this.size === 0){throw 'size is 0'};
      return this.top.val;
    }
    catch(e){
      throw e;
    };
  };

  isEmpty(){
    return this.size === 0 ? true : false;
  };
};

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  };

  enqueue(val){
    try{
      let newNode = new Node(val);
      if(!this.front){
        this.front = newNode;
        this.back = newNode;
      }else{
        this.back.next = this.back;
        this.back = newNode;
      };
    }
    catch(e){
      throw e.message;
    };
  };

  dequeue(){
    ;
  };

  peek(){
    ;
  };

  isEmpty(){
    ;
  };
};

module.exports = {Node, Stack, Queue};