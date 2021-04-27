function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooooo');
};

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

function inherit(proto) {
  function ChainLink() {}
  ChainLink.prototype = proto;
  return new ChainLink();
}

Dog.prototype = inherit(Wolf.prototype);

Dog.prototype.woof = function () {
  console.log(this.name + ': woof');
};

const rufus = new Dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); //true
/* 
//In JavaScript runtimes that support EcmaScript 5+ the Object.create function could be used to the same effect:

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

Dog.prototype = Object.create(Wolf.prototype);

Dog.prototype.woof = function () {
  console.log(this.name + ': woof');
};

const util = require('util');

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

//Node.js has a utility function: util.inherits that is often used in code bases using constructor functions:
Dog.prototype.woof = function () {
  console.log(this.name + ': woof');
};

util.inherits(Dog.prototype, Wolf.prototype);

//ES6

Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

 */
