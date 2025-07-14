// ******
// *    *
// *    *
// *    *
// *    *
// ******

function printPattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      if (i == 1 || i == num || j == 1 || j == num) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}
printPattern(6);
