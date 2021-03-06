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
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }

    this.length += 1;
    return this;
  }

  getNode(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length || index < 0) {
      return null;
    }

    if (index === 0) {
      this.unshift(new Node(value));
    } else if (index === this.length) {
      this.push(new Node(value));
    }

    const newNode = new Node(value);
    const targetNode = this.getNode(index);
    const prevNode = targetNode.prev;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    targetNode.prev = newNode;
    newNode.next = targetNode;

    this.length += 1;
    return this;
  }

  set(index, value) {
    if (index >= this.length || index < 0) {
      return null;
    }

    const targetNode = this.getNode(index);
    targetNode.value = value;
    return targetNode;
  }
}

module.exports = { DoublyLinkedList };
