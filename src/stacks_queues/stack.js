class Stack {

  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop() {
    this.index--;
    var deleted = this.storage[this.index];
    delete this.storage[this.index];
    return deleted;
  }

  size() {
    return this.index > 0 ? this.index : 0;
  }
}