// Factorial of N numbers

function printFactorialOfNumber(n) {
  if (n === 0) return 1;
  return n * printFactorialOfNumber(n - 1);
}

console.log(printFactorialOfNumber(3)); 
