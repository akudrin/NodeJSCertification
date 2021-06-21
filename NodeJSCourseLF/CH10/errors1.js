function doTask(amount) {
  if (typeof amount !== 'number') throw new Error('amount must be a number');
  return amount / 2;
}

function doTask(amount) {
  if (typeof amount !== 'number') throw new Error('amount must be a number');
  // THE FOLLOWING IS NOT RECOMMENDED:
  if (amount <= 0) throw 'amount must be greater than zero';
  return amount / 2;
}

doTask(-1);

function doTask(amount) {
  if (typeof amount !== 'number')
    throw new TypeError('amount must be a number');
  if (amount <= 0) throw new RangeError('amount must be greater than zero');
  return amount / 2;
}

doTask(-1);
