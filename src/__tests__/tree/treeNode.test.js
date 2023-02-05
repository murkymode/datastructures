/* eslint-disable no-undef */
const { Node } = require('../../tree/node');

const testNode = new Node(3);

describe('Tree Node', () => {
  test('should be a constructor function', () => {
    expect(typeof Node).toBe('function');
    const isInstance = testNode instanceof Node;
    expect(isInstance).toBe(true);
  });

  test('should initialize with value as root', () => {
    expect(testNode.root).toBe(3);
  });
});
