/* eslint-disable no-undef */
const { SinglyLinkedList } = require('../singly-linked-list');

const testList = new SinglyLinkedList();

describe('Singly Linked List', () => {
  test('should be a function', () => {
    expect(typeof SinglyLinkedList).toBe('function');
  });

  test('has add to tail method', () => {
    expect(typeof testList.push).toBe('function');
  });

  test('has remove tail method', () => {
    expect(typeof testList.pop).toBe('function');
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
});
