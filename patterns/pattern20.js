// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *


function printPattern(num) {
  let st = 1;
  let sp = 2 * num - 2;
  for (let i = 1; i <= 2 * num - 1; i++) {
    let row = "";
    for (let j = 1; j <= st; j++) {
      row += "*";
    }
    for (let j = 1; j <= sp; j++) {
      row += " ";
    }
    for (let j = 1; j <= st; j++) {
      row += "*";
    }

   
    if (i < num) {
      st++;
      sp -= 2;
    } 
    else{
      st--;
      sp += 2;
    }
    console.log(row);
  }
}
printPattern(6);