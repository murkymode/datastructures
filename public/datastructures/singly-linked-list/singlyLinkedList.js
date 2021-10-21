/*
singly linked list
es6 pattern
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) { /* append */
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(value) { /* prepend */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  pop() { /* remove last */
    if (!this.head) {
      return null;
    }
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }

  insert(value, index) { /* insert at */
  }

  lookup(index) { /* value at */
  }

  remove(index) {
  }

  reverse() {
  }
}

let newList = new LinkedList();
newList.push(3);
newList.push(6);
newList.unshift(2);
newList.pop()

console.log(`Linked list: ${newList}`);
