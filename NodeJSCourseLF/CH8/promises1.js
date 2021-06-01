//callback
function myAsyncOperation(cb) {
  doSomethingAsynchronous((err, value) => {
    cb(err, value);
  });
}

myAsyncOperation(functionThatHandlesTheResult);

//the same in promise form:

function myAsyncOperation() {
  return new Promise((resolve, reject) => {
    doSomethingAsynchronous((err, value) => {
      if (err) reject(err);
      else resolve(value);
    });
  });
}

const promise = myAsyncOperation();
// next up: do something with promise
