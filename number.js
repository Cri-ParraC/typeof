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