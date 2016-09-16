import LinkedListNode from './LinkedListNode.js';

export default function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.nodes = [];

LinkedList.prototype.insert = function insert(data) {
  const node = new LinkedListNode(data);
  if (!this.tail && !this.head) {
    this.head = node;
    this.tail = this.head;
    return Array.prototype.push.call(this.nodes, this.head);
  }
  this.tail.next = node;
  this.tail = node;

  return this;
};

LinkedList.prototype.insertArray = function insertArray(...args) {
  const data = args[0];
  const self = args[1] || this;
  if (!data.length) return self;
  const node = data.shift();
  self.insert(node);
  return insertArray(data, self);
};

LinkedList.prototype.deleteNode = function del(node) {
  if (!node.next && (node !== this.tail)) console.error('Broken link');
  let deleted;
  if (!node.next) return this.deleteTail();
  return deleted;
};

LinkedList.prototype.deleteTail = function del() {
  if (!this.tail) console.error('The tail does not exist.');
  const tail = this.nodes.pop();
  this.tail = this.nodes[this.nodes.length - 1];
  return tail;
};

LinkedList.prototype.deleteHead = function del() {
  if (!this.head) console.error('The head does not exist.');
  const head = this.nodes.shift();
  this.head = this.head.next;
  return head;
};

export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function llen(node) {
  let nodes = 0;
  let curr = node;
  while (curr.next) {
    if (nodes > 1000) break;
    console.log(`incrementing nodes from ${nodes} to ${nodes + 1}`);
    nodes++;
    curr = curr.next;
  }
  return ++nodes;
}

export function makeList(node, vals) {
  const curr = node;
  while (vals.length) {
    curr.next = new ListNode(vals.shift());
    makeList(curr.next, vals);
  }
  return curr;
}
/**
 * 7->3->9 + 5->6->8 => 2->0->8->1
 */
export function addTwo(...args) {
  const result = new ListNode();
  let l1 = args[0];
  let l2 = args[1];
  let value = args[2] || 0;

  if (l1 === null && l2 === null && value === 0) return null;
  if (l1 === null && l2 !== null) {
    l1 = new ListNode(0);
  }
  if (l2 === null && l1 !== null) {
    l2 = new ListNode(0);
  }

  if (l1 !== null) value += l1.val;
  if (l2 !== null) value += l2.val;

  const ones = value % 10;
  const tens = Math.floor((value * 10) / 100);
  result.val = ones;

  if (l1 !== null || l2 !== null) {
    const more = addTwo(l1.next || null, l2.next || null, tens);
    result.next = more;
  }
  return result;
}
