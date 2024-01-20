/* eslint-disable no-undef */
const { Queue } = require('../../stacks_queues/queue');

const testQueue = new Queue();

describe('Queue', () => {
  test('should be a function', () => {
    expect(typeof Queue).toBe('function');
    const isInstance = testQueue instanceof Queue;
    expect(isInstance).toBe(true);
  });
});
