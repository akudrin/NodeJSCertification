'use strict';
const { test } = require('tap');
const store = require('../store');

test('handles errors', ({ strictDeepEqual, end }) => {
  store(null, (err) => {
    strictDeepEqual(err, Error('input must be a buffer'));
    end();
  });
});

test('responds with id with lenght 4', ({ equal, ifError, end }) => {
  store(Buffer.from('1'), (err, data) => {
    ifError(err);
    equal(data.id.length, 4);
    end();
  });
});
