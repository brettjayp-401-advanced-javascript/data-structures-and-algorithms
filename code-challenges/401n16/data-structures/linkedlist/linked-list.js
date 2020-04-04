'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null; // A pointer to the next Node in the list.
    this.prev = null; // A pointer to the previous Node in the list (for use in stretch goal implementation).
  };
};

class LinkedList {
  constructor(head){
    this.head = null;
    this.size = 0;
  };

  sizeOf(){
    return this.size;
  }

  insert(val){
    // A function that takes any value as an argument and adds a new Node with that value to the beginning of the list (before the current head).
    let node = new Node(val);
    if(this.head != null){node.next = this.head};
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
      out += `{ ${pos.val} } -> `;
      pos = pos.next;
    };
    out += 'NULL';
    console.log(out);
  };

  append(value){
    let pos = this.head;
    while(pos.next != null){
      pos=pos.next;
    };
    let node = new Node(value);
    pos.next = node;
    this.size++;
  };

  insertBefore(value, newVal){
    let pos = this.head;
    while(pos.next != null){
      if(this.head.val == value){
        let newNode = new Node(newVal);
        newNode.next = pos;
        this.head = newNode;
        this.size++;
        break;
      }
      if(pos.next.val == value){
        let newNode = new Node(newVal);
        newNode.next = pos.next;
        pos.next = newNode;
        this.size++;
        break;
      };
      pos = pos.next;
    };
    return this.toString();
  };

  insertAfter(value, newVal){
    let pos = this.head;
  }; 
  
};

class DoublyLinkedList {
  constructor(head){
    this.head = head;
    this.size = 0;
  };

  sizeOf(){
    return this.size;
  }

  insertAtHead(val){
    let node = new Node(val);
    if(this.head != null){
      this.head.prev = node;
    }else{this.tail = node};
    node.next = this.head;
    this.head = node;
    this.size++;
  };

  includes(val){
    let pos = this.head;
    while(pos != null){
      if(pos.val === val){return true;}
      pos = pos.next;
    }
    return false;
  };

  toStringNext(){
    let pos = this.head;
    let out = '';
    while(pos != null){
      out += `{ ${pos.val} } -> `;
      pos = pos.next;
    };
    out += 'NULL';
    console.log(out);
  };

  toStringPrev(){
    let pos = this.tail;
    let out = 'NULL';
    while(pos != null){
      out += ` <- { ${pos.val} }`;
      pos = pos.prev;
    };
    console.log(out);
  };
};