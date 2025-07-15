// Palindrome Number

function checkPalindrome(num){
    let originalNum = num;
    let reversedNum = 0;
    let isPalindrome = false;

    while(num > 0){
      reversedNum = reversedNum * 10  + (num % 10);
      num = Math.floor(num / 10);
    }

    if(reversedNum === originalNum){
      isPalindrome = true;
    }
    else{
      isPalindrome = false;
    }
    return isPalindrome;
}

console.log(checkPalindrome(121));
