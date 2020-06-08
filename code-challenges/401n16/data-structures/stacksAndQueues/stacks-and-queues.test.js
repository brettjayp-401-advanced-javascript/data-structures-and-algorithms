'use strict';

const sq = require('./stacks-and-queues.js');

describe('stacks and queues', () => {

  let stack = new sq.Stack();
  stack.push(22);
  stack.push('bb');

  it('stacks', () => {
    expect(stack.size).toStrictEqual(2);
  });

});