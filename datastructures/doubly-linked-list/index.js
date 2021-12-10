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
    if (this.length === 0) return null;

    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length -= 1;
    return removed;
  }

  shift() { /* remove head */
    if (!this.head) return null;

    const shiftedNode = this.head;
    const newHead = this.head.next;

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
    // if (index >= this.length || index < 0) return null;
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

// const testList = new DoublyLinkedList();
// testList.push(2);
// testList.push(3);
// testList.push(4);
// const testNode = testList.getNode(1);

module.exports = { DoublyLinkedList };
