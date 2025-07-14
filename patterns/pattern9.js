//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

function printPattern(num) {
  let size = 2 * num ;
  let st = 1;
  let sp = num - 1;
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= sp; j++) {
      row += " ";
    }
    for (let j = 1; j <= st; j++) {
      row += "*";
    }

   if (i < num) {
      st += 2;
      sp--;
    } else if (i === num) {
     
    } else {
     
      st -= 2;
      sp++;
    }
    console.log(row);
  }
}
printPattern(6);



