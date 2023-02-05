/* eslint-disable no-undef */
const { Tree } = require('../../tree');

const testTree = new Tree(5);

describe('Tree', () => {
  test('should be a constructor function', () => {
    expect(typeof Tree).toBe('function');
    const isInstance = testTree instanceof Tree;
    expect(isInstance).toBe(true);
  });

  test('should initialize root correctly', () => {
    expect(testTree.root).toBe(5);
    expect(testTree.children.length).toBe(0);
  });

  test('should be able to add child node', () => {
    const testValue = 7;
    testTree.addChild(testValue);
    expect(testTree.children[0].root).toBe(7);
  });

  xtest('', () => {
  });

  xtest('', () => {
  });

  xtest('', () => {
  });

  xtest('', () => {
  });

  xtest('', () => {
  });
});
