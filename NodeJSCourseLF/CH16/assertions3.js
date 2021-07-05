//example using the fluid API provided by the expect library
const expect = require('expect')
const add = require('./get-add-from-somewhere.js')

expect(add(2, 2)).toStrictEqual(4)