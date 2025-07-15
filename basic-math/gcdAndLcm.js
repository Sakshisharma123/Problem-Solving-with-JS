// GCD and LCM of Two Numbers

function getLCMAndGCD(num1, num2) {

  let originalNum1 = num1;
  let originalNum2 = num2;
  let divisor, quotient;
  let gcd;

  if (num2 > num1) {
    divisor = num2;
    quotient = num1;
  } else {
    divisor = num1;
    quotient = num2;
  }

  while (divisor % quotient != 0) {
    let rem = divisor % quotient;

    quotient = divisor;
    divisor = rem;
  }

  gcd = divisor;
  let lcm = (originalNum1 * originalNum2) / gcd;
  console.log(`GCD of ${originalNum1} & ${originalNum2} is ${gcd}`);
  console.log(`LCM of ${originalNum1} & ${originalNum2} is ${lcm}`);
}

getLCMAndGCD(35, 10);
