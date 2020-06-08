'use strict';

const ll = require('./linked-list.js');

describe('Functionality testing of Singly Linked Lists.', () => {

  describe('When instantiating a NEW linked list, it...', () => {

    it('can successfully instantiate an empty list', () => {
      expect(() => {
        return new ll.LinkedList();
      }).not.toThrow();
    });

    it('sets <head> of new list to NULL', () => {
      let list = new ll.LinkedList();
      expect(list.head).toBe(null);
    });

    it('has a length of zero for new instantiations according to list.head', () => {
      let list = new ll.LinkedList();
      expect(list.size).toBe(0);
    });

    it('has a length of zero for new instantiations according to list.sizeOf()', () => {
      let list = new ll.LinkedList();
      expect(list.sizeOf()).toBe(0);
    });

  });

  describe('While working within a linked list, it...', () => {

    let list = new ll.LinkedList();

    it('can properly insert a value into the list', () => {
      expect(() => {
        list.insert(42);
      }).not.toThrow();
    });

    it('<head> property will correctly point to the beginning of the list', () => {
      expect([list.head.val, list.head.next]).toStrictEqual([42, null]);
    });

    describe('can insert multiple <Nodes> into the list successfully...', () => {
      
      let vals = [7, 'foo', 255, 'bar', {'a': 127}, true, 'fizzbuzz',];
      vals.forEach((val, ind, arr) => {
        it(`inserting ${val}`, () => {
          list.insert(val);
          if(list.sizeOf() === 2){
            expect([list.head.val, list.head.next.val]).toStrictEqual([val, 42]);
          }else{
            expect([list.head.val, list.head.next.val]).toStrictEqual([val, arr[ind - 1]]);
          };
        });
      });

    });

    it('<includes()> function correctly finds a value <{\'a\': 127}> in the list that exists', () => {
      expect(list.includes({'a': 127})).toStrictEqual(true);
    });

    it('<includes()> function correctly returns false when a value <\'batman\'> is not in the list', () => {
      expect(list.includes('batman')).toStrictEqual(false);
    });

    it('<toString()> function prints out your LinkedList in an expected way', () => {
      expect(list.toString()).toStrictEqual('{ fizzbuzz } -> { true } -> { [Object object] } -> { bar } -> { 255 } -> { foo } -> { 7 } -> { 42 } -> NULL');
    });

  });

  describe('can insert new nodes before and after a found value, and append to the end...', () => {
    
    let list = new ll.LinkedList();

    it('<append()> function can successfully add a node to the end of an empty linked list', () => {
      list.append('fizzbuzz');
      expect(list.toString()).toStrictEqual('{ fizzbuzz } -> NULL');
    });

    it('<append()> function can successfully add multiple nodes to the end of a linked list', () => {
      list.append(true);
      list.append('bar');
      list.append(255);
      list.append('foo');
      list.append(7);
      list.append('fizz');
      expect(list.toString()).toStrictEqual('{ fizzbuzz } -> { true } -> { bar } -> { 255 } -> { foo } -> { 7 } -> { fizz } -> NULL');
    });

    it('<insertBefore()> function can successfully insert a node before a node located in the middle of a linked list', () => {
      list.insertBefore(255, 'buzz');
      expect(list.toString()).toStrictEqual('{ fizzbuzz } -> { true } -> { bar } -> { buzz } -> { 255 } -> { foo } -> { 7 } -> { fizz } -> NULL');
    });

    it('<insertBefore()> function can successfully insert a node before the first node of a linked list', () => {
      list.insertBefore('fizzbuzz', 'code');
      expect(list.toString()).toStrictEqual('{ code } -> { fizzbuzz } -> { true } -> { bar } -> { buzz } -> { 255 } -> { foo } -> { 7 } -> { fizz } -> NULL');
    });

    it('<insertAfter()> function can successfully insert a node after a node in the middle of the linked list', () => {
      list.insertAfter('bar', 'foobar');
      expect(list.toString()).toStrictEqual('{ code } -> { fizzbuzz } -> { true } -> { bar } -> { foobar } -> { buzz } -> { 255 } -> { foo } -> { 7 } -> { fizz } -> NULL');
    });

    it('<insertAfter()> function can successfully insert a node after the last node of the linked list', () => {
      list.insertAfter('fizz', 77);
      expect(list.toString()).toStrictEqual('{ code } -> { fizzbuzz } -> { true } -> { bar } -> { foobar } -> { buzz } -> { 255 } -> { foo } -> { 7 } -> { fizz } -> { 77 } -> NULL');
    });

  });

  describe('can delete a node with the given value from the linked list...', () => {

    let list = new ll.LinkedList();
    list.insert(42);
    list.insert('foobar');
    list.insert(true);
    list.insert('fizzbuzz');

    it('<remove()> function can successfully remove a node that exists, tested by calling <includes()>', () => {
      list.remove(true);
      expect(list.includes(true)).toStrictEqual(false);
    });

    it('<remove()> function will not remove a node if the provided value does not exist, tested by calling <toString()>', () => {
      list.remove('code');
      expect(list.toString()).toStrictEqual('{ fizzbuzz } -> { foobar } -> { 42 } -> NULL');
    });

  });

  describe('can return a node that is $k from the end...', () => {

    let list = new ll.LinkedList();
    list.insert(42);
    list.insert('foobar');
    list.insert(true);
    list.insert('fizzbuzz');
    let listSize1 = new ll.LinkedList();
    listSize1.insert('one');

    it('<kthFromEnd()> function will throw the error \'$k is too big\' if value $k given is larger than the size of the list', () => {
      expect(() => {list.kthFromEnd(8)}).toThrowError('$k is too big');
    });

    it('<kthFromEnd()> function will throw the error \'$k is too big\' if value $k given is the same as the length of the list', () => {
      expect(() => {list.kthFromEnd(4)}).toThrowError('$k is too big');
    });

    it('<kthFromEnd()> function will throw the error \'$k must not be negative\' if value $k given is negative', () => {
      expect(() => {list.kthFromEnd(-1)}).toThrowError('$k must not be negative');
    });

    it('<kthFromEnd()> function can successfully return the node that is $k positions from the end in a list with a size of 1', () => {
      expect(listSize1.kthFromEnd(0)).toStrictEqual('one');
    });

    it('<kthFromEnd()> function can successfully return the node that is $k positions from the end, assuming $k is somewhere in between 0 and the length of the list', () => {
      expect(list.kthFromEnd(2)).toStrictEqual(true);
    });

  });

});
