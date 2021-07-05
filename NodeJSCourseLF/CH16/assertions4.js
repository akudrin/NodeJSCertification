const assert = require('assert')
const obj = {
  id: 1,
  name: { first: 'David', second: 'Clements' }
}
// this assert will fail because they are different objects:
assert.strictEqual(obj, {
  id: 1,
  name: { first: 'David', second: 'Clements' }
})


assert.deepStrictEqual(obj, {
    id: 1,
    name: { first: 'David', second: 'Clements' }
  })