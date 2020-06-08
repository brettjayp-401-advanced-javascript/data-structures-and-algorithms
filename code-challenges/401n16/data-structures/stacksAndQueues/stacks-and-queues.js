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
        this.front.next = newNode;
        this.back = newNode;
      }else{
        this.back.next = newNode;
        this.back = newNode;
      };
    }
    catch(e){
      throw e.message;
    };
  };

  dequeue(){
    try{
      if(this.front === null){
        throw 'no front of queue';
      }else{
        let front = this.front.val;
        this.front = this.front.next;
        return front;
      };
    }
    catch(e){
      throw e;
    };
  };

  peek(){
    try{
      ;
    }
    catch(e){
      throw e.message;
    };
  };

  isEmpty(){
    try{
      ;
    }
    catch(e){
      throw e.message;
    };
  };
};

module.exports = {Node, Stack, Queue};