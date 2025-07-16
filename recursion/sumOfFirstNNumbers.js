// Sum of first N numbers

function sumOfFirstNNumbers(n) {
  if (n == 0) {
    return 0;
  }

  return n + func(n - 1);
}

let num = 3;

console.log(sumOfFirstNNumbers(num));
