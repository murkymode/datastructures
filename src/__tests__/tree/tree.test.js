/* eslint-disable no-undef */
const { Tree } = require('../../tree');

const testTree = new Tree();

describe('Doubly Linked List', () => {
  test('should be a constructor function', () => {
    expect(typeof Tree).toBe('function');
    const isInstance = testTree instanceof Tree;
    expect(isInstance).toBe(true);
  });
});
