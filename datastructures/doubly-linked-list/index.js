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
    // if no head, return null

    // capture popped node
    // create new tail var
    // if new tail is not null
      // remove link to popped node
      // remove link from popped node
    // otherwise
      // current head is null

    // current tail is new tail is all else falls through
    // decrement length
    // return popped node
  }
}

module.exports = { DoublyLinkedList };
