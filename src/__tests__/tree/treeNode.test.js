/* eslint-disable no-undef */
const { Node } = require('../../tree/node');

const testNode = new Node();

describe('Tree Node', () => {
  test('should be a constructor function', () => {
    expect(typeof Node).toBe('function');
    const isInstance = testNode instanceof Node;
    expect(isInstance).toBe(true);
  });

  test('should initialize all values at null', () => {
    expect(testNode.root).toBe(null);
  });
});
