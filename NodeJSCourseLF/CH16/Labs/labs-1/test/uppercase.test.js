'use strict';
const uppercase = require('../uppercase');
test('throw when input is not a string', async () => {
  expect(() => uppercase(5)).toThrowError(Error('input must be a string'));
  expect(() => uppercase(true)).toThrowError(Error('input must be a string'));
  expect(() => uppercase(null)).toThrowError(Error('input must be a string'));
});
test('uppercase input', async () => {
  expect(uppercase('hello')).toStrictEqual('HELLO');
  expect(uppercase('b')).toStrictEqual('B');
});
