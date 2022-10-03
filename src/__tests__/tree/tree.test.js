/* eslint-disable no-undef */
const { Tree } = require('../../tree');
const { Node } = require('../../tree/node');

const testTree = new Tree(5);

describe('Doubly Linked List', () => {
  test('should be a constructor function', () => {
    expect(typeof Tree).toBe('function');
    const isInstance = testTree instanceof Tree;
    expect(isInstance).toBe(true);
  });

  test('should initialize root correctly', () => {
    expect(testTree.root).toBe(5);
    expect(testTree.children.length).toBe(0);
  });

  xtest('should be able to add child node', () => {
    const testNode = new Node(7);
    testTree.addChild(testNode);
    expect(testTree.children[0].value).toBe(7);
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
