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

const a = () =>
  new Promise((resolve, reject) => {
    opA((err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });

const promA = promisify(opA);
const promB = promisify(opB);
const promC = promisify(opC);

async function run() {
  try {
    print(null, await a());
    print(0, await promA());
    print(0, await promB());
    print(0, await promC());
  } catch (err) {
    print(err);
  }
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

/* opA((err, value) => {
  print(err, value);
  opB((err, value) => {
    print(err, value);
    opC((err, value) => {
      print(err, value);
    });
  });
});
 */

const promiseA = promisify(opA);
const promiseB = promisify(opB);
const promiseC = promisify(opC);

promiseA()
  .then((res) => {
    print(0, res);
    return promiseB();
  })
  .then((res) => {
    print(0, res);
    return promiseC();
  })
  .then((res) => {
    print(0, res);
  });
