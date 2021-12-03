/* eslint-disable no-undef */
const { SinglyLinkedList } = require('../singly-linked-list');

const testList = new SinglyLinkedList();

describe('Singly Linked List', () => {
  test('should be a function', () => {
    expect(typeof SinglyLinkedList).toBe('function');
  });

  test('has working add to tail method', () => {
    expect(typeof testList.push).toBe('function');
    testList.push(3);
    expect(testList.tail).toBe(3);
  });

  test('has remove tail method', () => {
    expect(typeof testList.pop).toBe('function');
    testList.pop();
    expect(testList.head).toBe(null);
  });

  test('has remove head method', () => {
    expect(typeof testList.shift).toBe('function');
  });

  test('has create new head method', () => {
    expect(typeof testList.unshift).toBe('function');
  });

  test('has retrieve value at target method', () => {
    expect(typeof testList.get).toBe('function');
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
});
