// Count all Digits of a Number

function countDigit(num) {
  let count = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    count++;
    num = Math.floor(num / 10);
  }

  return count;

}
console.log(countDigit(234789));
