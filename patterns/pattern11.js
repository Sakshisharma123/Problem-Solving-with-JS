// 1
// 01
// 101
// 0101
// 10101
// 010101

function printPattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        row += "1";
      } else {
        row += "0";
      }
    }

    console.log(row);
  }
}
printPattern(6);
