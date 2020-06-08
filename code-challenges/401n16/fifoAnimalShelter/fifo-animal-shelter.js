'use strict';

class Animal{
  constructor(species){
    try{
      this.species = species.toLowerCase();
      this.next = null;
    }
    catch(e){
      throw e;
    };
  };
};

class AnimalShelter{
  constructor(){
    this.front = null;
    this.back = null;
    this.size = 0;
  };

  enqueue(animal){
    Array.prototype.slice.call(arguments, 0).forEach(arg => {
      try{
        if(typeof arg !== 'string'){throw 'species must be a string'}else if(arg.toLowerCase() !== 'dog' && arg.toLowerCase() !== 'cat'){throw 'species must be dog or cat'};
        let newAnimal = new Animal(arg);
        if(!this.front){
          this.front = newAnimal;
          this.back = newAnimal;
          this.front.next = this.back;
        }else{
          this.back.next = newAnimal;
          this.back = newAnimal;
        };
        this.size++;
      }
      catch(e){
        throw e;
      };
    });
  };

  dequeue(pref){
    try{
      if(!this.front){throw 'no front of queue'};
      if(!pref){
        let front = this.front;
        this.front = this.front.next;
        this.size--;
        return front.species;
      };
      if(typeof pref !== 'string'){throw 'species must be a string'}else if(pref.toLowerCase() !== 'dog' && pref.toLowerCase() !== 'cat'){throw 'species must be dog or cat'};
      let pos = this.front;
      let prev = null;
      while(pos){
        if(pos.species === pref.toLowerCase()){
          let dequeue = pos;
          prev.next = pos.next;
          this.size--;
          return dequeue.species;
        };
        prev = pos;
        pos = pos.next;
      };
      throw `no ${pref.toLowerCase()} in the shelter`;
    }
    catch(e){
      // throw e;
      return null;
    }
  };
};

module.exports = {Animal, AnimalShelter};