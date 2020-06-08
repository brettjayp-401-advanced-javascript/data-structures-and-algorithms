'use strict';

const sq = require('./stacks-and-queues.js');

describe('stacks and queues', () => {

  describe('stacks', () => {

    let stack = new sq.Stack();
  
    it('push() 22', () => {
      stack.push(22);
      expect(stack.top.val).toStrictEqual(22);
    });
  
    it('push() \'bb\'', () => {
      stack.push('bb');
      expect(stack.top.val).toStrictEqual('bb');
    });
  
    it('stacks()', () => {
      expect(stack.size).toStrictEqual(2);
    });
  
    it('pop()', () => {
      expect(stack.pop()).toStrictEqual('bb');
    });
  
    it('pop() on empty', () => {
      let stackEmpty = new sq.Stack();
      expect(() => {stackEmpty.pop()}).toThrowError('size is 0');
    });
  
    it('peek()', () => {
      expect(stack.peek()).toStrictEqual(22);
    });
  
    it('peek() on empty', () => {
      let stackEmpty = new sq.Stack();
      expect(() => {stackEmpty.peek()}).toThrowError('size is 0');
    });
  
    it('isEmpty()', () => {
      expect(stack.isEmpty()).toStrictEqual(false);
    });
  
    it('isEmpty() on empty', () => {
      let stackEmpty = new sq.Stack();
      expect(stackEmpty.isEmpty()).toStrictEqual(true);
    });

  });

  describe('queues', () => {

    let queue = new sq.Queue();

    it('enqueue() \'abc\', front should match', () => {
      queue.enqueue('abc');
      expect(queue.front.val).toStrictEqual('abc');
    });

    it('enqueue() \'def\', back should be \'abc\'', () => {
      queue.enqueue('def');
      expect(queue.back.val).toStrictEqual('def');
    });

    describe('dequeue()...', () => {

      it('... \'abc\' should be returned as the removed node', () => {
        expect(queue.dequeue()).toStrictEqual('abc');
      });

      it('... \'def\' should be returned as current front', () => {
        expect(queue.front.val).toStrictEqual('def');
      });

    });

  });

});