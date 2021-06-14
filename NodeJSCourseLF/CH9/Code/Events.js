/* const { EventEmitter } = require('events');
const ee = new EventEmitter();
ee.on('my-event', () => {
  console.log('1st');
});
ee.on('my-event', () => {
  console.log('2nd');
});
ee.emit('my-event');
 */

/* const { EventEmitter } = require('events');
const ee = new EventEmitter();
ee.on('my-event', () => {
  console.log('2nd');
});
ee.prependListener('my-event', () => {
  console.log('0st');
});
ee.prependListener('my-event', () => {
  console.log('1st');
});

ee.emit('my-event');
 */

/* const { EventEmitter } = require('events');
const ee = new EventEmitter();
ee.on('my-event', () => {
  console.log('my-event fired');
});
ee.emit('my-event');
ee.emit('my-event');
ee.emit('my-event');
 */

const { EventEmitter } = require('events');
const ee = new EventEmitter();
ee.once('my-event', () => {
  console.log('my-event fired');
});
ee.emit('my-event');
ee.emit('my-event');
ee.emit('my-event');
