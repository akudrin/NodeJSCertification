const assert = require('assert')
const add = require('./get-add-from-somewhere.js')
const result = add(2, 2)
assert.strictEqual(typeof result, 'number')
assert.strictEqual(result, 4)

