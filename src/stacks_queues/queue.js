class Queue {
  constructor() {
    this.storage = {};
    this.frontOfQueue = 0;
    this.backOfQueue = 0;
  }

  enqueue(value) {
    this.storage[this.backOfQueue] = value;
    this.backOfQueue++;
  }

  dequeue() {
    const deleted = this.storage[this.frontOfQueue];
    delete this.storage[this.frontOfQueue];
    this.frontOfQueue++;
    return deleted;
  }

  size() {
    const size = this.backOfQueue - this.frontOfQueue;
    return size > 0 ? size : 0;
  }
}
