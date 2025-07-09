//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********



function printPattern(num) {
 let st = 1;
  for (let i = 1; i <= num; i++) {
     let row = "";
    for (let sp = num - i; sp>= 1; sp--) {
        row +=  " ";
    }
    for (let j = 1; j<= st; j++) {
        row +=  "*";
    }
    st += 2;
    console.log(row);
  }
}
printPattern(6);