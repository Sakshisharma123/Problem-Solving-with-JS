// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

function printPattern(num) {
 
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 +i) + " "; 
    }
    console.log(row);
  }
}
printPattern(6);