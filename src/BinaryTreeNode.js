export default function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.color = 'white';
}

BinaryTreeNode.prototype.insertLeft = (data) => {
  this.left = new BinaryTreeNode(data);
  return;
};

BinaryTreeNode.prototype.insertRight = (data) => {
  this.right = new BinaryTreeNode(data);
  return;
};
