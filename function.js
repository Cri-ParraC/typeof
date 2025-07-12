// 'function'

console.log(typeof function () { });       // => 'function'
console.log(typeof async function () { }); // => 'function'
console.log(typeof (() => { }));           // => 'function'
console.log(typeof (async () => { }));     // => 'function'
console.log(typeof console.log);           // => 'function'
console.log(typeof Date);                  // => 'function' (función constructora)