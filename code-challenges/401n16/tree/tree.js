'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

class BinaryTree {
  constructor(){
    this.root = null;
  };

  preOrder(root = this.root){ // A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order
    if(!root){return};
    let rootArr = [];
    let left = [];
    let right = [];
    rootArr.push(root.val);
    root.left ? left = this.preOrder(root.left) : true;
    root.right ? right = this.preOrder(root.right) : true;
    return [...rootArr, ...left, ...right];
  };

  inOrder(){ // A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
    if(!root){return};
    let rootArr = [];
    let left = [];
    let right = [];
    rootArr.push(root.val);
    root.left ? left = this.inOrder(root.left) : true;
    root.right ? right = this.inOrder(root.right) : true;
    return [...left, ...rootArr, ...right];
  };

  postOrder(){ // A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order
    if(!root){return};
    let rootArr = [];
    let left = [];
    let right = [];
    rootArr.push(root.val);
    root.left ? left = this.preOrder(root.left) : true;
    root.right ? right = this.preOrder(root.right) : true;
    return [...left, ...right, ...rootArr];
  };
};

class BinarySearchTree extends BinaryTree{
  add(val){ // A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
    ;
  };

  contains(val){ // A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not
    ;
  };
};

module.exports = {Node, BinaryTree, BinarySearchTree};