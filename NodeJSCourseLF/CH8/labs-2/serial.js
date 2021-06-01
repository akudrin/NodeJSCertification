'use strict';
const { promisify } = require('util');

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A');
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B');
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C');
  }, 125);
};

const promA = promisify(opA);
const promB = promisify(opB);
const promC = promisify(opC);

async function run() {
  print(0, await promA());
  print(0, await promB());
  print(0, await promC());
}

run().catch(console.error);

// Alternative with an async caller function
/*
async function printer() {
  const resultA = await promA();
  print(null,resultA);
  const resultB = await promB();
  print(null,resultB);
  const resultC = await promC();
  print(null,resultC);
}
 
printer()
*/
