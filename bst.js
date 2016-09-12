'use strict';
import BinaryTreeNode from 'binarytreenode';
import BinaryTree from 'binarytree';

(() => {
  // function BinaryTreeNode(value) {
  //   this.value = value;
  //   this.left = null;
  //   this.right = null;
  //   this.color = white;
  // }
  //
  // BinaryTreeNode.prototype.insertLeft = (data) => {
  //   return this.left = new BinaryTreeNode(data);
  // }
  //
  // BinaryTreeNode.prototype.insertRight = (data) => {
  //   return this.right = new BinaryTreeNode(data);
  // }
  //
  // function BinaryTree() {
  //   this.root = null;
  //   this.nodes = new Array();
  //   this.size = () => this.nodes.length;
  // }
  // BinaryTree.prototype.length = 0;
  //
  // BinaryTree.prototype.height = function height(node) {
  //   const self = (arguments.length > 1) ? arguments[1] : this;
  //   // console.log(self);
  //   if (!self.root) return 0;
  //   node = node ? node : self.root;
  //
  //   const lheight = height(node.left, self);
  //   const rheight = height(node.right, self);
  //   if (lheight > rheight) return lheight++;
  //   if (rheight > lheight) return rheight++;
  // }
  //
  // BinaryTree.prototype.isEob = (node) => {
  //   // if node is null branch has terminated
  //   return node === null;
  // }
  //
  // BinaryTree.prototype.isLeaf = (node) => {
  //   // node is leaf if it has no children
  //   return (!node.left && !node.right);
  // }
  //
  function BinarySearchTree() {
    this.traversals = {
      inorder: new Array(),
      preorder: new Array(),
      postorder: new Array(),
      levelorder: new Array(),
    };
  }
  BinarySearchTree.prototype = new BinaryTree();

  BinarySearchTree.prototype.createFromArray = function(data) {
    if (!Array.isArray(data)) return undefined;
    data.forEach(item => {
      this.insert(item);
    });
    return this;
  }

  BinarySearchTree.prototype.insert = function insert(data) {
    const self = (arguments.length > 2) ? arguments[2] : this;
    const node = (arguments.length > 1) ? arguments[1] : self.root;

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
  }

  BinarySearchTree.prototype.inorder = function inorder(node) {
    const self = (arguments.length > 1) ? arguments[1] : this;
    if (!self.root) return console.error('Cannot traverse an empty tree');
    node = node ? node : self.root;
    if (node.left) inorder(node.left, self);
    self.traversals.inorder.push(node.value);
    if (node.right) inorder(node.right, self);
    return self.traversals.inorder;
  }

  BinarySearchTree.prototype.preorder = function preorder(node) {
    const self = (arguments.length > 1) ? arguments[1] : this;
    if (!self.root) return console.error('Cannot traverse an empty tree');
    node = node ? node : self.root;
    self.traversals.preorder.push(node.value);
    if (node.left) preorder(node.left, self);
    if (node.right) preorder(node.right, self);
    return self.traversals.preorder;
  }

  BinarySearchTree.prototype.postorder = function postorder(node) {
    const self = (arguments.length > 1) ? arguments[1] : this;
    if (!self.root) return console.error('Cannot traverse an empty tree');
    node = node ? node : self.root;
    if (node.left) postorder(node.left, self);
    if (node.right) postorder(node.right, self);
    self.traversals.postorder.push(node.value);
    return self.traversals.postorder;
  }

  BinarySearchTree.prototype.levelorder = function levelorder(node) {
    const self = (arguments.length > 1) ? arguments[1] : this;
    if (!self.root) return console.error('Cannot traverse an empty tree');
    node = node ? node : self.root;
    self.traversals.levelorder.push(node);

  }

  const data = [16, 2, 46, 5, 9, 24, 12, 25];
  const bst = new BinarySearchTree().createFromArray(data);

  // console.log(bst.inorder());
  // console.log(bst.preorder());
  // console.log(bst.postorder());
  // console.log(bst);
  console.log(bst.height());



  BinaryTree.prototype.insertLeft = function insert(node, data) {
    if (!this.root) {
      this.root = new BinaryTreeNode(data);
      this.length++;
      return;
    }
    node = node ? node : this.root;
    if (node.left) return insert(node.left, data);
    node.left = new BinaryTreeNode(data);
    this.length++
    return;
  }

  BinaryTree.prototype.insertRight = function insert(node, data) {
    if (!this.root) {
      this.root = new BinaryTreeNode(data);
      this.length++;
      return;
    }
    node = node ? node : this.root;
    if (node.right) return insert(node.right, data);
    node.right = new BinaryTreeNode(data);
    this.length++;
    return;
  }
  // const tree = new BinaryTree();
  // tree.insertLeft(tree.root, 5);
  // tree.insertLeft(tree.root, 3);
  // tree.insertRight(tree.root.left, 8);
  //
  //
  // console.log(tree);
})()
