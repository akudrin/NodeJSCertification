'use strict'
const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')
const contents = readFileSync(__filename, {encoding: 'utf8'})
writeFileSync(join(__dirname, 'out.txt'), contents.toUpperCase())
//flag option set to 'a' to open a file in append mode
writeFileSync(join(__dirname, 'out.txt'), contents.toUpperCase(), {
    flag: 'a'
  })