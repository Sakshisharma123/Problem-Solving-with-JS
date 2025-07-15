// Check if the Number is Armstrong -- the sum of cubes of each digit is equal to the number itself.

function checkArmStrong(num) {
  let originalNum = num;
  let rem;
  let sum = 0;
  let isArmstrong = false;
  while (num > 0) {
    rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.floor(num / 10);
  }

  if (originalNum === sum) {
    isArmstrong = true;
  } else {
    isArmstrong = false;
  }

  return isArmstrong;
}

console.log(checkArmStrong(153));
