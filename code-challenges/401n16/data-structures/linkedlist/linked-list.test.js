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

  describe('Working within a linked list, it...', () => {

    let list = new ll.LinkedList();

    it('can properly insert a value into the list', () => {
      expect(() => {
        list.insert(42);
      }).not.toThrow();
    });

    it('<head> property will correctly point to the beginning of the list', () => {
      expect([list.head.val, list.head.next]).toStrictEqual([42, null]);
    });

    // it('can insert multiple <Nodes> into the list successfully', () => {
    //   expect(true).toBe(true);
    // });

    // it('<includes()> function correctly finds a value in the list that exists', () => {
    //   expect(true).toBe(true);
    // });

    // it('<includes()> function correctly returns false when a value is not in the list', () => {
    //   expect(true).toBe(true);
    // });

    // it('<toString()> function prints out your LinkedList in an expected way', () => {
    //   expect(true).toBe(true);
    // });

  });

});