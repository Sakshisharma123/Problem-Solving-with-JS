let num1 = 35;
let num2 = 10;

let originalNum1 = num1;
let originalNum2 = num2;


while(num1 % num2 != 0){
    let rem = num1 % num2;
    num2 = rem;
    num1 = num2;
}

let gcd = num2;

let lcm = (originalNum1 * originalNum2)/gcd;

console.log(gcd);
console.log(lcm);