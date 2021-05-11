const { promisify } = require('util');
const { readFile } = require('fs');

const readFileProm = promisify(readFile);

const promise = readFileProm(__filename);

promise.then((contents) => {
  console.log(contents.toString());
});

promise.catch((err) => {
  console.error(err);
});

const { readFile } = require('fs').promises;

readFile(__filename)
  .then((contents) => {
    return contents.toString();
  })
  .then((stringifiedContents) => {
    console.log(stringifiedContents);
  })
  .catch(console.error);
