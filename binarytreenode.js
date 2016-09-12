'use strict';

export default function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.color = white;
}

BinaryTreeNode.prototype.insertLeft = (data) => {
  return this.left = new BinaryTreeNode(data);
}

BinaryTreeNode.prototype.insertRight = (data) => {
  return this.right = new BinaryTreeNode(data);
}
