/* eslint-disable no-undef */
const { DoublyLinkedList } = require('../../doubly-linked-list');

const testList = new DoublyLinkedList();

describe('Doubly Linked List', () => {
  test('should be a constructor function', () => {
    expect(typeof DoublyLinkedList).toBe('function');
    const instance = testList instanceof DoublyLinkedList;
    expect(instance).toBe(true);
  });
});
