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

  push(value) {
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

  pop(value) {
  }

  insert(value) {
  }

  lookup(index) {
  }

  remove(index) {
  }

  reverse() {
  }
}

let newList = new LinkedList();
newList.push(3);

console.log(`Linked list: ${newList}`);
