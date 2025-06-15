let a = 24;
let b = 12;

console.log("Before: ", "a =", a, "b =", b);

// First approach by third variable
// let temp;
// temp = a;
// a = b;
// b = temp;

// second approach without third variable using airthmetic operation
// a = a + b;
// b = a - b;
// a = a - b;

// third aproach using drestucting functionality

// [a, b] = [b, a];


console.log("After: ","a =", a, "b =", b);