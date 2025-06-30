// 'number'

console.log(typeof 10);               // => 'number'
console.log(typeof -10);              // => 'number'
console.log(typeof 0b1010);           // => 'number' (binario)
console.log(typeof 0o12);             // => 'number' (octal)
console.log(typeof 0xa);              // => 'number' (hexadecimal)
console.log(typeof 1e1);              // => 'number' (notación científica)
console.log(typeof 10.0);             // => 'number' (decimal)
console.log(typeof 0);                // => 'number'
console.log(typeof +0);               // => 'number'
console.log(typeof -0);               // => 'number'
console.log(typeof Infinity);         // => 'number'
console.log(typeof -Infinity);        // => 'number'
console.log(typeof (1 / 0));          // => 'number' (Infinity)
console.log(typeof (-1 / 0));         // => 'number' (-Infinity)
console.log(typeof NaN);              // => 'number'
console.log(typeof Number('10'));     // => 'number'
console.log(typeof Number('cadena')); // => 'number'

// 'string'

console.log(typeof '');         // => 'string'
console.log(typeof 'cadena');   // => 'string'
console.log(typeof '10');       // => 'string'
console.log(typeof String(10)); // => 'string'

// 'boolean'

console.log(typeof true);       // => 'boolean'
console.log(typeof false);      // => 'boolean'
console.log(typeof Boolean(0)); // => 'boolean'

// 'undefined'

let a;
console.log(typeof a);         // => 'undefined'
console.log(typeof b);         // => 'undefined'
console.log(typeof undefined); // => 'undefined'

// 'object' (null)

console.log(typeof null); // => 'object'

// 'object'

console.log(typeof {});                   // => 'object'
console.log(typeof Array(4));             // => 'object'
console.log(typeof []);                   // => 'object'
console.log(typeof new Map());            // => 'object'
console.log(typeof console);              // => 'object'
console.log(typeof new Date());           // => 'object'
console.log(typeof new Boolean(true));    // => 'object'
console.log(typeof new Number(10));       // => 'object'
console.log(typeof new String('cadena')); // => 'object'
console.log(typeof new Object);           // => 'object'

// 'function'

console.log(typeof function () { }); // => 'function'
console.log(typeof (() => { }));     // => 'function'
console.log(typeof console.log);     // => 'function'
console.log(typeof Date);            // => 'function' (función constructora)

// 'bigint'

console.log(typeof 12n); // => 'bigint'

// 'symbol'

console.log(typeof Symbol());          // => 'symbol'
console.log(typeof Symbol('símbolo')); // => 'symbol'