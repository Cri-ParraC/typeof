// 'object'

console.log(typeof {});                   // => 'object'
console.log(typeof [1, 2, 3]);            // => 'object'
console.log(typeof Array(3));             // => 'object'
console.log(typeof []);                   // => 'object'
console.log(typeof new Map());            // => 'object'
console.log(typeof new WeakMap());        // => 'object'
console.log(typeof new Set());            // => 'object'
console.log(typeof new WeakSet());        // => 'object'
console.log(typeof console);              // => 'object'
console.log(typeof new Date());           // => 'object'
console.log(typeof new Boolean(true));    // => 'object'
console.log(typeof new Number(10));       // => 'object'
console.log(typeof new String('cadena')); // => 'object'
console.log(typeof new Object);           // => 'object'
console.log(typeof /abc/);                // => 'object' (expresión regular)
console.log(typeof new RegExp());         // => 'object' (expresión regular)
console.log(typeof globalThis);           // => 'object' (objeto global)