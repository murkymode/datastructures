const { Node } = require('./node');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) { /* new tail */
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  pop() { /* remove tail */
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() { /* remove head */
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value) { /* new head */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  insert(value, index) { /* insert at */
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const priorNode = this.get(index - 1);
    const temp = priorNode.next;
    priorNode.next = newNode;
    newNode.next = temp;
    this.length += 1;

    return true;
  }

  get(index) { /* value at */
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter += 1;
    }

    return current;
  }

  set(index, value) { /* alter value at */
    const targetNode = this.get(index);

    if (targetNode) {
      targetNode.value = value;
      return true;
    }

    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const priorNode = this.get(index - 1);
    const removed = priorNode.next;
    priorNode.next = removed.next;
    this.length -= 1;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i += 1) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  empty() {
  }
}

module.exports = { SinglyLinkedList };
