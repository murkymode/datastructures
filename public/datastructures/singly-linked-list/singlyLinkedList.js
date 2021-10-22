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

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) { /* prepend */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  pop() { /* remove last */
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  getPriorNextNodes(index) {
    let count = 0;
    let priorNode = this.head;
    let nextNode = priorNode.next;
    while (count < index - 1) {
      priorNode = priorNode.next;
      nextNode = priorNode.next;
      count++;
    }
    return {
      priorNode,
      nextNode
    }
  }

  insert(value, index) { /* insert at */
    const newNode = new Node(value);
    if (index >= this.length) {
      this.push(value);
    }
    const { priorNode, nextNode } = this.getPriorNextNodes(index);
    priorNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
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
newList.pop();
newList.insert(5, 1);

console.log(`Linked list: ${newList}`);