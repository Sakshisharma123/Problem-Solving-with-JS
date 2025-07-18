// Fibonacci Number

// 0, 1, 1, 2, 3, 5

// function fibonacci(num) {
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i < num; i++) {
//     let temp = a + b; // 1, 2, 3, 5
//     b = a;
//     a = temp;

//     console.log(b);
//   }
// }
// fibonacci(6);

function printFibonacci(a, b, length) {
  if (length == 0) return;
  let temp = a + b;
  b = a;
  a = temp;
  console.log(b);

  printFibonacci(a, b, length - 1);
}

printFibonacci(0, 1, 6);
