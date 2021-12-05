/* eslint-disable no-undef */
const { Node } = require('../../doubly-linked-list/node');

const testNode = new Node();

describe('Doubly Linked List Node', () => {
  test('should be a constructor function', () => {
    expect(typeof Node).toBe('function');
    const isInstance = testNode instanceof Node;
    expect(isInstance).toBe(true);
  });

  test('should initialize all values at null', () => {
    expect(testNode.value).toBe(null);
    expect(testNode.next).toBe(null);
    expect(testNode.prev).toBe(null);
  });
});
