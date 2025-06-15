let a = 0;
let b = 1;

console.log('Fibonacci Sequence:');
let sum;
for(let i = 1; i<5; i++){
    sum = a + b;
    b = a;
    a = sum;
    console.log(b);
}


























// for(let i = 1; i< 10; i++){
//     temp= a + b;
//     b = a;
//     a = temp;
//     console.log(`${b}`);
// }
