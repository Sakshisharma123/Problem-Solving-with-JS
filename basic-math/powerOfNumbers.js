// find the value of n raised to the power of its own reverse.


let number = 13;
let originalNum = number;
let rem;

while(number != 0){
    rem = number % 10;
    number = Math.floor(number/10);

}

console.log("Power of Numbers:", rem);

let power = Math.pow(originalNum, rem);

console.log("Power of Numbers:", power);