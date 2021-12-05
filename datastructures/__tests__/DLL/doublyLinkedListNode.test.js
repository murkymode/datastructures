/* eslint-disable no-undef */
const { Node } = require('../../doubly-linked-list/node');

describe('Doubly Linked List Node', () => {
  test('should be a constructor function', () => {
    expect(typeof Node).toBe('function');
    const testNode = new Node();
    const isInstance = testNode instanceof Node;
    expect(isInstance).toBe(true);
  });
});
