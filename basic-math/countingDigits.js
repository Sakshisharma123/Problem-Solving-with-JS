let num = 234789;
let count = 0;
let rem;

while (num > 0) {
  rem = num % 10;
  num = Math.floor(num / 10);
  count++;
}

console.log(`Number of Digits in Number is ${count}`);
