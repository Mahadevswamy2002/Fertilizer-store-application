// buffer_methods_demo.js
const Buffer = require('buffer').Buffer;

// Demonstrate Buffer.alloc()
const allocBuffer = Buffer.alloc(10);
console.log(`Allocated Buffer: ${allocBuffer}`);

// Demonstrate Buffer.from()
const fromBuffer = Buffer.from('Hello, World!');
console.log(`Buffer from string: ${fromBuffer}`);

// Demonstrate Buffer.byteLength()
const byteLength = Buffer.byteLength('Hello, World!', 'utf8');
console.log(`Byte length of string: ${byteLength}`);

// Demonstrate Buffer.concat()
const buffer1 = Buffer.from('Hello, ');
const buffer2 = Buffer.from('World!');
const concatBuffer = Buffer.concat([buffer1, buffer2]);
console.log(`Concatenated Buffer: ${concatBuffer}`);

// Demonstrate Buffer.compare()
const buffer3 = Buffer.from('Hello, World!');
const buffer4 = Buffer.from('Hello, Universe!');
const compareResult = Buffer.compare(buffer3, buffer4);
console.log(`Comparison result: ${compareResult}`);

// Demonstrate Buffer.copy()
const copyBuffer = Buffer.alloc(10);
buffer3.copy(copyBuffer, 0, 0, 10);
console.log(`Copied Buffer: ${copyBuffer}`);

// Demonstrate Buffer.fill()
const fillBuffer = Buffer.alloc(10);
fillBuffer.fill('x');
console.log(`Filled Buffer: ${fillBuffer}`);

// Demonstrate Buffer.indexOf()
const indexBuffer = Buffer.from('Hello, World!');
const index = indexBuffer.indexOf('World');
console.log(`Index of 'World': ${index}`);

// Demonstrate Buffer.readIntBE() and Buffer.readIntLE()
const intBuffer = Buffer.from([0x12, 0x34, 0x56, 0x78]);
const intBE = intBuffer.readIntBE(0, 4);
const intLE = intBuffer.readIntLE(0, 4);
console.log(`Big-endian integer: ${intBE}`);
console.log(`Little-endian integer: ${intLE}`);

// Demonstrate Buffer.write()
const writeBuffer = Buffer.alloc(10);
writeBuffer.write('Hello', 0, 5, 'utf8');
console.log(`Written Buffer: ${writeBuffer}`);