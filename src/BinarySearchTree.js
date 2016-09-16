import BinaryTreeNode from './BinaryTreeNode.js';
import BinaryTree from './BinaryTree.js';
import Queue from './Queue.js';

export default function BinarySearchTree() {
  this.traversals = {
    inorder: [],
    preorder: [],
    postorder: [],
    levelorder: [],
  };
}
BinarySearchTree.prototype = new BinaryTree();

// redo this with tail recursion
BinarySearchTree.prototype.createFromArray = function create(data) {
  if (!Array.isArray(data)) return undefined;
  data.forEach(item => {
    this.insert(item);
  });
  return this;
};

BinarySearchTree.prototype.insert = function insert(...args) {
  const data = args[0];
  const self = (args.length > 2) ? args[2] : this;
  const node = (args.length > 1) ? args[1] : self.root;

  if (!self.root) {
    return Array.prototype.push.call(
      self.nodes,
      (self.root = new BinaryTreeNode(data))
    );
  }

  if (data === node.value) return console.error('Cannot insert duplicate values');

  if (data < node.value) {
    if (self.isEob(node.left)) {
      Array.prototype.push.call(
        self.nodes,
        (node.left = new BinaryTreeNode(data))
      );
    } else {
      return insert(data, node.left, self);
    }
  }

  if (data > node.value) {
    if (self.isEob(node.right)) {
      Array.prototype.push.call(
        self.nodes,
        (node.right = new BinaryTreeNode(data))
      );
    } else {
      insert(data, node.right, self);
    }
  }
  return self;
};

BinarySearchTree.prototype.inorder = function inorder(...args) {
  const self = (args.length > 1) ? args[1] : this;
  const node = args[0];
  if (!self.root) return console.error('Cannot traverse an empty tree');
  const currentNode = node || self.root;
  if (currentNode.left) inorder(currentNode.left, self);
  self.traversals.inorder.push(currentNode.value);
  if (currentNode.right) inorder(currentNode.right, self);
  return self.traversals.inorder;
};

BinarySearchTree.prototype.preorder = function preorder(...args) {
  const self = (args.length > 1) ? args[1] : this;
  const node = args[0];
  if (!self.root) return console.error('Cannot traverse an empty tree');
  const currentNode = node || self.root;
  self.traversals.preorder.push(currentNode.value);
  if (currentNode.left) preorder(currentNode.left, self);
  if (currentNode.right) preorder(currentNode.right, self);
  return self.traversals.preorder;
};

BinarySearchTree.prototype.postorder = function postorder(...args) {
  const self = (args.length > 1) ? args[1] : this;
  const node = args[0];
  if (!self.root) return console.error('Cannot traverse an empty tree');
  const currentNode = node || self.root;
  if (currentNode.left) postorder(currentNode.left, self);
  if (currentNode.right) postorder(currentNode.right, self);
  self.traversals.postorder.push(currentNode.value);
  return self.traversals.postorder;
};

BinarySearchTree.prototype.levelorder = function levelorder(...args) {
  const self = (args.length > 1) ? args[1] : this;
  const nodes = (args[0] instanceof Queue) ? args[0] : new Queue();

  if (!self.root) return console.error('Cannot traverse an empty tree');

  const currentNode = (nodes.peek() instanceof BinaryTreeNode) ? nodes.shift() : self.root;

  if (currentNode === self.root && currentNode.color === 'black') {
    return self.traversals.levelorder;
  }

  const visited = nodes;

  if (currentNode.color === 'white') {
    currentNode.color = 'grey';
    self.traversals.levelorder.push(currentNode.value);
  }

  if (currentNode.color === 'grey') {
    if (currentNode.left && currentNode.left.color === 'white') {
      currentNode.left.color = 'grey';
      visited.push(currentNode.left);
      self.traversals.levelorder.push(currentNode.left.value);
    }

    if (currentNode.right && currentNode.right.color === 'white') {
      currentNode.right.color = 'grey';
      visited.push(currentNode.right);
      self.traversals.levelorder.push(currentNode.right.value);
    }
  }

  currentNode.color = 'black';
  levelorder(visited, self);
  return self.traversals.levelorder;
};

export const nthLargest = (tree, n) => {
  const inorder = tree.inorder();
  const nodes = inorder.length;
  const nth = n || nodes - 1;
  return inorder[nodes - nth];
};

// this still needs to be implemented
export const secondLargest = function search(tree) {
  const node = (tree instanceof BinarySearchTree) ? tree.root : tree;
  if (!(node instanceof BinaryTreeNode)) return null;
  // if (node.right)
  return true;
};
