'use strict';

const fifo = require('./fifo-animal-shelter.js');

describe('first in first out animal shelter...', () => {

  let shelter = new fifo.AnimalShelter();

  describe('... instantiate a new AnimalShelter()...', () => {
    
    it('... we can instantiate a new animal shelter', () => {
      expect(shelter.front).toStrictEqual(null);
    });

  });
  
  describe('... enqueue()...', () => {
    
    it('... we can enqueue() a cat', () => {
      shelter.enqueue('cat');
      expect(shelter.front.species).toStrictEqual('cat');
    });
  
    it('... we can enqueue() a dog', () => {
      shelter.enqueue('dog');
      expect(shelter.back.species).toStrictEqual('dog');
    });
  
    it('... we cannot enqueue() an elephant', () => {
      expect(() => {shelter.enqueue('elephant')}).toThrowError('species must be dog or cat');
    });
  
    it('... we cannot enqueue() an object of type other than string', () => {
      expect(() => {shelter.enqueue(true)}).toThrowError('species must be a string');
    });
    
  });

  describe('... dequeue()...', () => {

    it('... will return \'dog\' if there is a dog in the queue to remove', () => {
      expect(shelter.dequeue('dog')).toStrictEqual('dog');
    });

    it('... will return null if there is no matching species in the queue when trying to dequeue() a \'dog\'', () => {
      expect(shelter.dequeue('dog')).toStrictEqual(null);
    });
    
    it('... will return the animal that is at front if no preference given', () => {
      expect(shelter.dequeue()).toStrictEqual('cat');
    });
    
  });

});