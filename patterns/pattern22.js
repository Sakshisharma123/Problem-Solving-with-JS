// 6 6 6 6 6 6 6 6 6 6 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 2 1 2 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 6 6 6 6 6 6 6 6 6 6

function printPattern(num) {
  let size = 2 * num - 1;

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
     
      let minDist = Math.min(i, j, size - 1 - i, size - 1 - j);
      row += (num - minDist) + " ";
    }
    console.log(row.trim());
  }
}

printPattern(2);

