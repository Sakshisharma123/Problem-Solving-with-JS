// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

function printPattern(num) {
 
  for (let i = 1; i <= num; i++) {
     let row = "";
    for (let j = 1; j <= i; j++) {
        row +=  i+ " ";
    }
    console.log(row);
  }
}
printPattern(6);