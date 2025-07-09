// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1


function printPattern(num) {
 
  for (let i = 0; i < num; i++) {
     let row = "";
    for (let j = 1; j <= num - i; j++) {
        row +=  j+ " ";
    }
    console.log(row);
  }
}
printPattern(6);