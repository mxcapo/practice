export default function Queue() {}

Queue.prototype = [];
Queue.prototype.peek = function peek() {
  return this.length ? this[0] : null;
};

Queue.prototype.push = function push(...args) {
  return Array.prototype.push.apply(this, args);
};

Queue.prototype.shift = function shift(...args) {
  return Array.prototype.shift.apply(this, args);
};
