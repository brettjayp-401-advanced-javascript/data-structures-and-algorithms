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
      this.size--;
      return top.val;
    }
    catch(e){
      throw e;
    };
  };

  peek(){
    try{
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
    this.size = 0;
  };

  enqueue(val){
    Array.prototype.slice.call(arguments, 0).forEach(arg => {
      try{
        let newNode = new Node(arg);
        if(!this.front){
          this.front = newNode;
          this.front.next = newNode;
          this.back = newNode;
        }else{
          this.back.next = newNode;
          this.back = newNode;
        };
        this.size++;
      }
      catch(e){
        throw e.message;
      };
    });
  };

  dequeue(){
    try{
      if(!this.front){throw 'no front of queue'};
      let front = this.front.val;
      this.front = this.front.next;
      this.size--;
      return front;
    }
    catch(e){
      throw e;
    };
  };

  peek(){
    try{
      if(!this.front){throw 'no front of queue'};
      return this.front.val;
    }
    catch(e){
      throw e;
    };
  };

  isEmpty(){
    try{
      return this.size < 1 ? true : false;
    }
    catch(e){
      throw e;
    };
  };
};

module.exports = {Node, Stack, Queue};