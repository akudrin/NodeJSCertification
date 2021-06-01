const { readFile } = require('fs').promises;
const print = (contents) => {
  console.log(contents.toString());
};
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

//To determine the order in which we want operations to resolve in async/await we simply //await those operations in that order.
async function run() {
  print(await readFile(bigFile));
  print(await readFile(mediumFile));
  print(await readFile(smallFile));
}

run().catch(console.error);
