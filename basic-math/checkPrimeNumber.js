// Check for Prime- Number which has only two factor 1 and number itself.

// brute force approach
// function checkPrime(num) {
//   let count = 0;
//   for (let i = 1; i  <= num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }

//   if (count == 2) {
//     console.log(`${num} is Prime`);
//   } else {
//     console.log(`${num} is not Prime`);
//   }
// }


// optimal approach
function checkPrime(num) {
  let count = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      count++;

      if (i !== num / i) {
        count++;
      }
    }
  }

  if (count == 2) {
    console.log(`${num} is Prime`);
  } else {
    console.log(`${num} is not Prime`);
  }
}

checkPrime(13);
