'use strict'
const { Readable, Writable, Transform, PassThrough, pipeline } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  let piped = false
  setImmediate(() => {
    assert.strictEqual(piped, true, 'use the pipe method')
    assert.deepStrictEqual(sink, ['a', 'b', 'c'])
  })
  const writable = new Writable({
    decodeStrings: false,
        write(chunk, enc, cb) {
      sink.push(chunk)
      cb()
    },
    final() {
      console.log('passed!')
    }
  })
  writable.once('pipe', () => {
    piped = true
  })
  return writable
}
const readable = Readable.from(['a', 'b', 'c'])

const writable = createWritable()

const transform = () => {  
  return new Transform({    
      transform (chunk, enc, next) {      
          const uppercased = chunk.toString().toUpperCase()      
          next(null, uppercased)    
      }  
  })
}

pipeline(readable, transform(), writable, (err) => {
assert.ifError(err)
assert.deepStrictEqual(writable.sink, ['A', 'B', 'C'])
console.log('passed!')
})