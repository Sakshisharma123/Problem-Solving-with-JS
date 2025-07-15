// Divisors of a Number

// brute force approach
// function printDivisor(num) {
//   let divisor = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       divisor.push(i);
//     }
//   }
//   console.log(`The divisors of ${num} are ${divisor}`);
// }

// optimal approach

function printDivisor(num) {
  let divisor = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      divisor.push(i);

      if (i !== num / i) {
        divisor.push(num / i);
      }
    }
  }
  console.log(`The divisors of ${num} are ${divisor.sort((a, b) => a - b)}`);
}

printDivisor(21);
