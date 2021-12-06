const { Node } = require('./node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    // create a new node with the given value
    // if list has no head
      // current head is new node
      // current tail is new node
    // otherwise
      // current tail's next is new node
      // new node's prev is current tail
      // current tail is new node
    // increment length
    // return list
  }
}

module.exports = { DoublyLinkedList };
