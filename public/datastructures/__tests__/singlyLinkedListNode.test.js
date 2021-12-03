/* eslint-disable no-undef */
const { Node } = require('../singly-linked-list/node');

const testNode = new Node();

describe('SLL Node', () => {
  test('should be a constructor function', () => {
    expect(typeof Node).toBe('function');
    const nodeInstance = testNode instanceof Node;
    expect(nodeInstance).toBe(true);
  });

  // test('should', () => {
  // });
});
