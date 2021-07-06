/* 'use strict';
const { test } = require('tap');
const req = require('../req');

test('handles network errors', ({ strictDeepEqual, end }) => {
  req('http://error.com', (err) => {
    strictDeepEqual(err, Error('network error'));
    end();
  });
});

test('responds with data', ({ ok, strictDeepEqual, ifError, end }) => {
  req('http://example.com', (err, data) => {
    ifError(err);
    ok(Buffer.isBuffer(data));
    strictDeepEqual(data, Buffer.from('some data'));
    end();
  });
}); */
'use strict';
const req = require('../req');

test('handles network errors', (done) => {
  req('http://error.com', (err) => {
    expect(err).toStrictEqual(Error('network error'));
    done();
  });
});

test('responds with data', (done) => {
  req('http://example.com', (err, data) => {
    expect(err == null).toBe(true);
    expect(Buffer.isBuffer(data)).toBeTruthy();
    expect(data).toStrictEqual(Buffer.from('some data'));
    done();
  });
});
