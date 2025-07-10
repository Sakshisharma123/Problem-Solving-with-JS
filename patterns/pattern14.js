// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function printPattern(num) {
 
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(65 +j) + " ";
   
    }

    console.log(row);
  }
}
printPattern(6);