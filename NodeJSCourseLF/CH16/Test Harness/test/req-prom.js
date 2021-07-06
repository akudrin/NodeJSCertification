/* 'use strict';
const { test } = require('tap');
const req = require('../req-prom');

test('handles network errors', async ({ rejects }) => {
  await rejects(req('http://error.com'), Error('network error'));
});

test('responds with data', async ({ ok, strictDeepEqual }) => {
  const data = await req('http://example.com');
  ok(Buffer.isBuffer(data));
  strictDeepEqual(data, Buffer.from('some data'));
});
 */
'use strict';
// make Jest work with nodes setTimeout instead of overriding it
global.setTimeout = require('timers').setTimeout;
const req = require('../req-prom');

test('handles network errors', async () => {
  await expect(req('http://error.com')).rejects.toStrictEqual(
    Error('network error')
  );
});

test('responds with data', async () => {
  const data = await req('http://example.com');
  expect(Buffer.isBuffer(data)).toBeTruthy();
  expect(data).toStrictEqual(Buffer.from('some data'));
});
