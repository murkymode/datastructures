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

  pop(value) { /* remove last */

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

console.log(`Linked list: ${newList}`);
