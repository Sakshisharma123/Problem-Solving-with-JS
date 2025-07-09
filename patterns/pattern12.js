// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321
// 123456654321

function printPattern(num) {
  let sp = 2 * num - 2;
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = 1; j <= sp; j++) {
      row += " ";
    }
    for (let j = i; j >= 1; j--) {
      row += j;
    }

    sp -= 2;

    console.log(row);
  }
}
printPattern(6);
