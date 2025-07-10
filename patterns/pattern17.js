//      A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA 
// ABCDEFEDCBA


function printPattern(num) {
 
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num - i; j++) {
      row += " "; 
    }

    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 +j); 
    }

    for (let j = i-1; j >= 0; j--) {
      row += String.fromCharCode(65 +j); 
    }
    console.log(row);
  }
}
printPattern(6);