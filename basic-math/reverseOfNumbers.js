let num = 2341;
let originalNum = num;
let reversedNum = 0;

while(num > 0){
    reversedNum = reversedNum * 10 + num% 10;
    num = Math.floor(num/10);
}

console.log(`${originalNum} of Reversed Number is ${reversedNum}`);