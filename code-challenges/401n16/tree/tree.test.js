'use strict';

const tree = require('./tree.js');
const Node = tree.Node;
const BinaryTree = tree.BinaryTree;
const BinarySearchTree = tree.BinarySearchTree;

// describe('.', () => {
//   it('.', () => {
//     expect(true).toStrictEqual(true);
//   });
// });

describe('binary tree', () => {
  let treeA = new BinaryTree();
  treeA.root = new Node('R');
  treeA.root.left = new Node('R.L');
  treeA.root.right = new Node('R.R');
  treeA.root.left.left = new Node('R.L.L');
  treeA.root.left.right = new Node('R.L.R');
  treeA.root.left.left.right = new Node('R.L.L.R');
  treeA.root.right.right = new Node('R.R.R');
  // console.log(treeA.root)
  it('tree and nodes', () => {
    expect(treeA.preOrder()).toStrictEqual(['R', 'R.L', 'R.L.L', 'R.L.L.R', 'R.L.R', 'R.R', 'R.R.R']);
  });
});

describe('binary search tree', () => {
  let treeA = new BinarySearchTree();
  it('search tree add', () => {
    expect(() => treeA.add(15)).not.toThrow();
  });
  console.log(treeA);
});