'use strict';
import BinaryTreeNode from 'binarytreenode';

export default function BinaryTree() {
  this.root = null;
  this.nodes = new Array();
  this.size = () => this.nodes.length;
}
BinaryTree.prototype.length = 0;

BinaryTree.prototype.height = function height(node) {
  const self = (arguments.length > 1) ? arguments[1] : this;
  // console.log(self);
  if (!self.root) return 0;
  node = node ? node : self.root;

  const lheight = height(node.left, self);
  const rheight = height(node.right, self);
  if (lheight > rheight) return lheight++;
  if (rheight > lheight) return rheight++;
}

BinaryTree.prototype.isEob = (node) => {
  // if node is null branch has terminated
  return node === null;
}

BinaryTree.prototype.isLeaf = (node) => {
  // node is leaf if it has no children
  return (!node.left && !node.right);
}
