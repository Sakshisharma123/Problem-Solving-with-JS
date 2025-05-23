// Armstrong Number -- the sum of cubes of each digit is equal to the number itself.

let num = 125;
let originalNum = num;
let rem;
let sum = 0;

while (num > 0) {
  rem = num % 10;
  sum = sum + rem * rem * rem;
  num =  Math.floor(num / 10);
}

if (originalNum === sum) {
  console.log("Number is Armstrong");
} else {
  console.log("Number is not Armstrong");
}
