let num = 4421;

let multiply = 1;
let sum = 0;
let rem;
let result;

while (num > 0) {
  rem = num % 10;
  num = Math.floor(num / 10);
  multiply = multiply * rem;
  sum = sum + rem;
}

result = multiply - sum;

console.log("Result: ", result);
