// Sum of first N numbers

function sumOfFirstNNumbers(n) {
  if (n === 0) return 0; 

  return n + sumOfFirstNNumbers(n - 1);
}

console.log(sumOfFirstNNumbers(5)); 
