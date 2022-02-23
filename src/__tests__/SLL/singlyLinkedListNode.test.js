/* eslint-disable no-undef */
const { Node } = require('../../singly_linked_list/node');

const testNode = new Node();

describe('SLL Node', () => {
  test('should be a constructor function', () => {
    expect(typeof Node).toBe('function');
    const nodeInstance = testNode instanceof Node;
    expect(nodeInstance).toBe(true);
  });

  test('should initialize the value to null', () => {
    expect(testNode.value).toBe(null);
  });

  test('should initialize next value to null', () => {
    expect(testNode.next).toBe(null);
  });
});
