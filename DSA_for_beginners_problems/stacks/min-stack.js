var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  let min = 0;
  if (this.minStack.length === 0) {
    min = val;
  } else {
    min = Math.min(val, this.minStack[this.minStack.length - 1]);
  }
  this.minStack.push(min);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
