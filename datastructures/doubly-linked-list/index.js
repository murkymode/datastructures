const { Node } = require('./node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    // create a new node with the given value
    const newNode = new Node(value);
    // if list has no head
      // current head is new node
      // current tail is new node
    // otherwise
      // current tail's next is new node
      // new node's prev is current tail
      // current tail is new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    // increment length
    // return list
    this.length += 1;
    return this;
  }
}

module.exports = { DoublyLinkedList };
