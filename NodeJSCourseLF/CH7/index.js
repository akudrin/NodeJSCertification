'use strict';
const format = require('./format');
const print = require('./print');
const add = require('./additionfuncexport');

console.log(add(19, 23));

if (require.main === module) {
  const pino = require('pino');
  const logger = pino();
  logger.info(format.upper('my-package started'));
  process.stdin.resume();
} else {
  const reverseAndUpper = (str) => {
    return format.upper(str).split('').reverse().join('');
  };
  module.exports = reverseAndUpper;
}
