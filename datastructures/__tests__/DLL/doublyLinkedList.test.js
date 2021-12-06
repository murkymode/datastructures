/* eslint-disable no-undef */
const { DoublyLinkedList } = require('../../doubly-linked-list');

const testList = new DoublyLinkedList();

describe('Doubly Linked List', () => {
  test('should be a constructor function', () => {
    expect(typeof DoublyLinkedList).toBe('function');
    const isInstance = testList instanceof DoublyLinkedList;
    expect(isInstance).toBe(true);
  });

  test('should have working push method', () => {
    expect(typeof testList.push).toBe('function');
    testList.push(2);
    expect(testList.tail.value).toBe(2);
    testList.push(3);
    expect(testList.tail.value).toBe(3);
  });

  test('should have working pop method', () => {
    expect(typeof testList.pop).toBe('function');
    testList.pop();
    expect(testList.tail.value).toBe(2);
  });

  test('should have working shift method', () => {
    expect(typeof testList.shift).toBe('function');
    testList.push(1);
    testList.push(2);
    testList.shift();
    expect(testList.head.value).toBe(1);
  });

  test('should have working unshift method', () => {
    expect(typeof testList.unshift).toBe('function');
    testList.unshift(0);
    expect(testList.head.value).toBe(0);
  });

  test('should have working get method', () => {
    expect(typeof testList.get).toBe('function');
    const testNode = testList.get(1);
    expect(testNode.value).toBe(1);
  });

  test('should have working insert method', () => {
    expect(typeof testList.insert).toBe('function');
    testList.insert(2, 1.5);
    const testNode = testList.get(2);
    expect(testNode.value).toBe(1.5);
  });

  test('should have working set method', () => {
    expect(typeof testList.set).toBe('function');
    testList.set(0, 1);
    expect(testList.head.value).toBe(1);
  });

  test('should have working remove method', () => {
    expect(typeof testList.remove).toBe('function');
    const testNode = testList.remove(2);
    expect(testNode.value).toBe(1.5);
  });

  test('should have working empty method', () => {
    expect(typeof testList.empty).toBe('function');
    testList.empty();
    expect(testList.head).toBe(null);
  });

  test('should have working reverse method', () => {
    expect(typeof testList.reverse).toBe('function');
    const reverseList = new DoublyLinkedList();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    reverseList.push(3);
    reverseList.push(2);
    reverseList.push(1);
    expect(testList).toEqual(reverseList);
  });
});
