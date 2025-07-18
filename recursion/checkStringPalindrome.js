// Check if the given String is Palindrome or not

function isPalindrome(name) {
  function reverseString(str, index = str.length - 1) {
    if (index < 0) return "";
    return str[index] + reverseString(str, index - 1);
  }

  return name === reverseString(name);
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("sakshi"));
