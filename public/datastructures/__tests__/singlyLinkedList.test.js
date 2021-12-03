/* eslint-disable no-undef */
const { SinglyLinkedList } = require('../singly-linked-list');

const testList = new SinglyLinkedList();

describe('Singly Linked List', () => {
  test('should be a function', () => {
    expect(typeof SinglyLinkedList).toBe('function');
  });

  test('has working add to tail method', () => {
    expect(typeof testList.push).toBe('function');
    testList.push(2);
    testList.push(3);
    expect(testList.tail.value).toBe(3);
  });

  test('has working remove tail method', () => {
    expect(typeof testList.pop).toBe('function');
    testList.push(4);
    testList.pop();
    expect(testList.tail.value).toBe(3);
  });

  test('has working remove head method', () => {
    expect(typeof testList.shift).toBe('function');
    testList.push(2);
    testList.push(3);
    testList.shift();
    expect(testList.head.value).toBe(3);
  });

  test('has working create new head method', () => {
    expect(typeof testList.unshift).toBe('function');
    testList.unshift(2);
    expect(testList.head.value).toBe(2);
  });

  test('has working retrieve value at target method', () => {
    expect(typeof testList.get).toBe('function');
    const targetNode = testList.get(1);
    expect(targetNode.value).toBe(3);
  });

  test('has alter value at target method', () => {
    expect(typeof testList.set).toBe('function');
  });

  test('has remove node method', () => {
    expect(typeof testList.remove).toBe('function');
  });

  test('has reverse list method', () => {
    expect(typeof testList.reverse).toBe('function');
  });

  test('has empty list method', () => {
    expect(typeof testList.empty).toBe('function');
  });
});
