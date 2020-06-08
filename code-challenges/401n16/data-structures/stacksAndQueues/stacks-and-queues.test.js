'use strict';

const sq = require('./stacks-and-queues.js');

describe('stacks and queues...', () => {

  describe('stacks...', () => {

    let stackA = new sq.Stack();
    let stackB = new sq.Stack();
    let stackEmpty = new sq.Stack();

    describe('push()...', () => {

      it('... \'22\', top should match \'22\'', () => {
        stackA.push(22);
        expect(stackA.top.val).toStrictEqual(22);
      });
    
      it('... \'bb\', top should match \'bb\'', () => {
        stackA.push('bb');
        expect(stackA.top.val).toStrictEqual('bb');
      });
      
      it('... stack size should now be 6 after calling push() 4 more times', () => {
        stackB.push(22);
        stackB.push('bb');
        stackB.push(22);
        stackB.push('bb');
        stackB.push(22);
        stackB.push('bb');
        expect(stackB.size).toStrictEqual(6);
      });
      
    });

    describe('pop()...', () => {

      it('... returned value should be \'bb\'', () => {
        expect(stackA.pop()).toStrictEqual('bb');
      });
    
      it('... on an empty stack should throw error', () => {
        expect(() => {stackEmpty.pop()}).toThrowError('size is 0');
      });

      it('... can successfully empty a full stack', () => {
        stackB.pop();
        stackB.pop();
        stackB.pop();
        stackB.pop();
        stackB.pop();
        stackB.pop();
        expect(stackB.size).toStrictEqual(0);
      });
      
    });

    describe('peek()...', () => {
      
      it('... should return value \'22\'', () => {
        expect(stackA.peek()).toStrictEqual(22);
      });
    
      it('... on an empty stack should throw error', () => {
        expect(() => {stackEmpty.peek()}).toThrowError('size is 0');
      });
      
    });

    describe('isEmpty()...', () => {

      it('... should return false on a populated stack', () => {
        expect(stackA.isEmpty()).toStrictEqual(false);
      });
    
      it('... should return true on an empty stack', () => {
        expect(stackEmpty.isEmpty()).toStrictEqual(true);
      });
      
    });

  });

  describe('queues...', () => {

    let queue = new sq.Queue();
    let queueEmpty = new sq.Queue();
    let queueMulti = new sq.Queue();

    describe('enqueue()...', () => {

      it('... \'abc\', front should match \'abc\'', () => {
        queue.enqueue('abc');
        expect(queue.front.val).toStrictEqual('abc');
      });

      it('... back should match \'abc\'', () => {
        expect(queue.back.val).toStrictEqual('abc');
      });
  
      it('... \'def\', front should match \'abc\'', () => {
        queue.enqueue('def');
        expect(queue.front.val).toStrictEqual('abc');
      });
  
      it('... back should match \'def\'', () => {
        expect(queue.back.val).toStrictEqual('def');
      });

      it('... can successfully enqueue multiple itmes in one call', () => {
        queueMulti.enqueue('aa', 'bb', 'cc', 11, 22, 33, 'abc');
        expect(queueMulti.size).toStrictEqual(7);
      });

    });

    describe('dequeue()...', () => {

      it('... \'abc\' should be returned as the removed node', () => {
        expect(queue.dequeue()).toStrictEqual('abc');
      });

      it('... \'def\' should be returned as current front', () => {
        expect(queue.front.val).toStrictEqual('def');
      });

      it('... can succesfully empty a queue after several calls', () => {
        queueMulti.dequeue();
        queueMulti.dequeue();
        queueMulti.dequeue();
        queueMulti.dequeue();
        queueMulti.dequeue();
        queueMulti.dequeue();
        queueMulti.dequeue();
        expect(queueMulti.size).toStrictEqual(0);
      });

    });

    describe('peek()...', () => {

      it('... on empty queue will throw', () => {
        expect(() => {queueEmpty.peek()}).toThrowError('no front of queue');
      });
  
      it('... should return \'def\'', () => {
        expect(queue.peek()).toStrictEqual('def');
      });
      
    });

    describe('isEmpty()...', () => {

      it('... returns true when empty', () => {
        expect(queueEmpty.isEmpty()).toStrictEqual(true);
      });
  
      it('... returns false when queue is not empty', () => {
        expect(queue.isEmpty()).toStrictEqual(false);
      });
      
    });

  });

});