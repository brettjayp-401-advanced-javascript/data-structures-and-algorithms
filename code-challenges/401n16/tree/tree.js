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
    try{
      rootArr.push(root.val);
      if(!rootArr[0] || rootArr[0] === null){throw 'failure with root'};
      root.left ? left = this.preOrder(root.left) : true;
      root.right ? right = this.preOrder(root.right) : true;
    }
    catch(e){
      throw e;
    };
    return [...rootArr, ...left, ...right];
  };

  inOrder(root = this.root){ // A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed orderr
    if(!root){return};
    let rootArr = [];
    let left = [];
    let right = [];
    try{
      rootArr.push(root.val);
      if(!rootArr[0] || rootArr[0] === null){throw 'failure with root'};
      root.left ? left = this.inOrder(root.left) : true;
      root.right ? right = this.inOrder(root.right) : true;
    }
    catch(e){
      throw e;
    };
    return [...left, ...rootArr, ...right];
  };

  postOrder(root = this.root){ // A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed orderr
    if(!root){return};
    let rootArr = [];
    let left = [];
    let right = [];
    try{
      rootArr.push(root.val);
      if(!rootArr[0] || rootArr[0] === null){throw 'failure with root'};
      root.left ? left = this.postOrder(root.left) : true;
      root.right ? right = this.postOrder(root.right) : true;
    }
    catch(e){
      throw e;
    };
    return [...left, ...right, ...rootArr];
  };
};

class BinarySearchTree extends BinaryTree{
  add(val){ // A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
    try{
      if(!this.root){this.root = new Node(val); return;};
      let pos = this.root;
      while(pos){
        pos.val > val
          ? !pos.left
            ? pos.left = new Node(val)
            : pos = pos.left
          : pos.val < val
        ? !pos.right
          ? pos.right = new Node(val)
        : pos = pos.right
      : true;
      };
      // return true;
    }
    catch(e){
      throw e;
    };
  };

  contains(val){ // A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not
    ;
  };
};

module.exports = {Node, BinaryTree, BinarySearchTree};