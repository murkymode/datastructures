class Stack {

  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {

    this.storage[this.index] = value;
    this.index++;
  }
}