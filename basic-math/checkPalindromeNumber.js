let num = 121;
let reversed_n = 0;
let original = num;

while (num > 0) {
  reversed_n = reversed_n * 10 + (num % 10);
  num = Math.floor(num / 10);
}

if (reversed_n === original) {
  console.log("Number is Palindrome");
} else {
  console.log("Number is not Palindrome");
}
