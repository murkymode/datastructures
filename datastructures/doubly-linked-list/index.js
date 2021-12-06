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
    if (!this.head) return null;
    // capture popped node
    // create new tail var
    const poppedNode = this.tail;
    const newTail = poppedNode.prev;
    // if new tail is not null
      // remove link to popped node
      // remove link from popped node
    // otherwise
      // current head is null
    if (newTail) {
      newTail.next = null;
      poppedNode.prev = null;
    } else {
      this.head = null;
    }
    // current tail is new tail is all else falls through
    // decrement length
    // return popped node
    this.tail = newTail;
    this.length -= 1;
    return poppedNode;
  }
}

module.exports = { DoublyLinkedList };
