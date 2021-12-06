const { Node } = require('./node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;

    const poppedNode = this.tail;
    const newTail = poppedNode.prev;

    if (newTail) {
      newTail.next = null;
      poppedNode.prev = null;
    } else {
      this.head = null;
    }

    this.tail = newTail;
    this.length -= 1;
    return poppedNode;
  }

  shift() {
    // if no head return null

    // capture shifted node
    // create a variable for new head
    // if list length is greater than 1
      // new head's prev is null
      // shifted node's next is null
    // otherwise
      // current tail is null

    // current head is new head
    // decrement the length
    // return the shifted node
  }
}

module.exports = { DoublyLinkedList };
