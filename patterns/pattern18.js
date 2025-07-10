// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function printPattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(65 + num - j) + " ";
    }
    console.log(row);
  }
}
printPattern(6);
