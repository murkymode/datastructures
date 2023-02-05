/* eslint-disable no-undef */
const { Queue } = require('../../stacks_queues/queue');

const testQueue = new Queue();

describe('Singly Linked List', () => {
  test('should be a function', () => {
    expect(typeof testQueue).toBe('function');
  });
});
