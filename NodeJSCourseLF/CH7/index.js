'use strict';
const format = require('./format');
const print = require('./print');

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
