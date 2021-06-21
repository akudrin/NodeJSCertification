//On the last line in the example code, we also concatenate buffer to an empty string. This has the same effect as calling the toString method
const buffer = Buffer.from('👀');
console.log(buffer); // prints <Buffer f0 9f 91 80>
console.log(buffer.toString()); // prints 👀
console.log(buffer + ''); // prints 👀

const buffer = Buffer.from('👀');
console.log(buffer); // prints <Buffer f0 9f 91 80>
console.log(buffer.toString('hex')); // prints f09f9180
console.log(buffer.toString('base64')); // prints 8J+RgA==
