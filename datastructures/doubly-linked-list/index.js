const { Node } = require('./node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) { /* new tail */
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length += 1;
    return this;
  }

  pop() { /* remove tail */
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

  shift() { /* remove head */
    if (!this.head) return null;

    const shiftedNode = this.head;
    const newHead = shiftedNode.next;

    if (this.head !== this.tail) {
      newHead.prev = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
    }

    this.head = newHead;
    this.length -= 1;
    return shiftedNode;
  }

  unshift(value) { /* new head */
    const newHead = new Node(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length -= 1;
    return this;
  }

  getNode(index) {
    // if index is greater than list length or index is negative
      // return false
    if (index >= this.length || index < 0) return false;
    // create counter for index
    // create variable for current node
    // while index is not equal to passed index value
      // current node is current node's next
      // increment count
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    // return current node when loop closes
    return currentNode;
  }
}

module.exports = { DoublyLinkedList };
