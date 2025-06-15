// positive integer that is equal to the sum of its positive divisors, excluding itself

let num = 8128;
let originalNum = num;
let sum = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    sum = sum + i;
  }
}

console.log(originalNum, sum);

if (originalNum === sum) {
  console.log("Number is Perfect");
} else {
  console.log("Number is not Perfect");
}


