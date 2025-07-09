//  *
//  **
//  ***
//  ****
//  *****
//  ******
//  *****
//  ****
//  ***
//  **
//  *

function printPattern(num) {
  let size = 2 * num - 1;
  let st = 1;
  for (let i = 1; i <= size; i++) {
    let row = "";
   
    for (let j = 1; j <= st; j++) {
      row += "*";
    }

    if (i < num) {
      st ++;
     
    }  else {
      st --;
  
    }

    console.log(row);
  }
}
printPattern(6);
