let a = 0;
let b = 1;

console.log('Fibonacci Sequence:');
for(let i = 1; i< 10; i++){
    temp= a + b;
    b = a;
    a = temp;
    console.log(`${b}`);
}
