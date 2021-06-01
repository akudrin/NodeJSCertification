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

opC(print);
opB(print);
opA(print);

/* //C >>> B >>> A
async function run() {
  await opC(print);
  await opB(print);
  await opA(print);
}

run().catch(console.error);
 */
