'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null; // A pointer to the next Node in the list.
    // prev - A pointer to the previous Node in the list (for use in stretch goal implementation).
  };
};

class LinkedList {
  constructor(head){
    this.head = head;
    this.size = 0;
  };

  sizeOf(){
    return this.size;
  }

  insert(val){
    // A function that takes any value as an argument and adds a new Node with that value to the beginning of the list (before the current head).
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  };

  includes(val){
    // A function that takes in a value as an argument and returns true or false if that value was found in the list.
    let pos = this.head;
    while(pos != null){
      if(pos.val === val){return true;}
      pos = pos.next;
    }
    return false;
  };

  toString(){
    // A function that takes no arguments but prints out a visual representation of the Linked List, similar to the format: { a } -> { b } -> { c } -> NULL.
    let pos = this.head;
    let out = '';
    while(pos != null){
      out += `{ ${pos.val} } `;
      pos = pos.next;
    }
    console.log(out);
  };
};

class DoublyLinkedList { // stretch goal
  constructor(){};

  insert(){};

  includes(){};

  toString(){};
};