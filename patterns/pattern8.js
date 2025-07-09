// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *

function printPattern(num) {
 let st = 2 * num - 1;
 let sp = 0;
  for (let i = 1; i <= num; i++) {
     let row = "";
    for (let j = 1; j<= sp; j++) {
        row +=  " ";
    }
    for (let j = 1; j<= st; j++) {
        row +=  "*";
    }
    st -= 2;
    sp++;
    console.log(row);
  }
}
printPattern(6);