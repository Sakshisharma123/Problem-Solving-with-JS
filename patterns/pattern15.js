// A B C D E F
// A B C D E 
// A B C D
// A B C
// A B
// A


function printPattern(num) {
 
  for (let i = 0; i < num; i++) {
    let row = "";

    for (let j = 0; j < num - i; j++) {
      row += String.fromCharCode(65 +j) + " ";
   
    }

    console.log(row);
  }
}
printPattern(6);