//One way to think about exceptions and rejections is that exceptions are synchronous errors and rejections are asynchronous errors.
class OddError extends Error {
  constructor(varName = '') {
    super(varName + ' must be even');
    this.code = 'ERR_MUST_BE_EVEN';
  }
  get name() {
    return 'OddError [' + this.code + ']';
  }
}
function doTask(amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') {
      reject(new TypeError('amount must be a number'));
      return;
    }
    if (amount <= 0) {
      reject(new RangeError('amount must be greater than zero'));
      return;
    }
    if (amount % 2) {
      reject(new OddError('amount'));
      return;
    }
    resolve(amount / 2);
  });
}

doTask(3)
  .then((result) => {
    console.log('result', result);
  })
  .catch((err) => {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
      console.error('wrong type');
    } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
      console.error('out of range');
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd');
    } else {
      console.error('Unknown error', err);
    }
  });

doTask(4)
  .then((result) => {
    throw Error('spanner in the works');
  })
  .catch((err) => {
    if (err instanceof TypeError) {
      console.error('wrong type');
    } else if (err instanceof RangeError) {
      console.error('out of range');
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd');
    } else {
      console.error('Unknown error', err);
    }
  });
