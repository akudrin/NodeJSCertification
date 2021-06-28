'use strict'

const { join } = require('path')
console.log('out file:', join(__dirname, 'out.txt'))

console.log('current filename', __filename)
console.log('current dirname', __dirname)