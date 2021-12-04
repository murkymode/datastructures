/* eslint-disable no-undef */
const { DoublyLinkedList } = require('../../doubly-linked-list');

const testList = new DoublyLinkedList();

describe('Doubly Linked List', () => {
  test('should be a constructor function', () => {
    expect(typeof DoublyLinkedList).toBe('function');
    const isInstance = testList instanceof DoublyLinkedList;
    expect(isInstance).toBe(true);
  });

  test('should working have a push method', () => {
    expect(typeof testList.push).toBe('function');
    testList.push(2);
    expect(testList.tail.value).toBe(2);
    testList.push(3);
    expect(testList.tail.value).toBe(3);
  });

  test('should have a pop method', () => {
    expect(typeof testList.pop).toBe('function');
    testList.pop();
    expect(testList.tail.value).toBe(2);
  });

  test('should have a shift method', () => {
    expect(typeof testList.shift).toBe('function');
    testList.push(3);
    testList.shift(1);
    expect(testList.head.value).toBe(1);
  });

  test('should have a unshift method', () => {
    expect(typeof testList.unshift).toBe('function');
  });

  test('should have a insert method', () => {
    expect(typeof testList.insert).toBe('function');
  });

  test('should have a get method', () => {
    expect(typeof testList.get).toBe('function');
  });

  test('should have a set method', () => {
    expect(typeof testList.set).toBe('function');
  });

  test('should have a remove method', () => {
    expect(typeof testList.remove).toBe('function');
  });

  test('should have a empty method', () => {
    expect(typeof testList.empty).toBe('function');
  });

  test('should have a reverse method', () => {
    expect(typeof testList.reverse).toBe('function');
  });
});
