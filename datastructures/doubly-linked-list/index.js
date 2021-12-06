const { Node } = require('./node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) { /* add to tail */
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
    // create a new node with given value

    // if no head
      // current head is new node
      // current tail is new node
    // otherwise
      // current head's prev is new node
      // new head's next is current head
      // current head is new node

    // increment length
    // return the list
  }
}

module.exports = { DoublyLinkedList };
