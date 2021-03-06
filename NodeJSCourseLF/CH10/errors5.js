class OddError extends Error {
  constructor(varName = '') {
    super(varName + ' must be even');
    this.code = 'ERR_MUST_BE_EVEN';
  }
  get name() {
    return 'OddError [' + this.code + ']';
  }
}

async function doTask(amount) {
  if (typeof amount !== 'number')
    throw new TypeError('amount must be a number');
  if (amount <= 0) throw new RangeError('amount must be greater than zero');
  if (amount % 2) throw new OddError('amount');
  return amount / 2;
}

async function run() {
  try {
    const result = await doTask(3);
    console.log('result', result);
  } catch (err) {
    if (err instanceof TypeError) {
      console.error('wrong type');
    } else if (err instanceof RangeError) {
      console.error('out of range');
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd');
    } else {
      console.error('Unknown error', err);
    }
  }
}

run();
