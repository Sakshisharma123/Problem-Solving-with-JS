//  Sakshee is allowed to go out with his friends only on the even days of a given month.
// Write a program to count the number of days he can go out in the month of August.

let augustMonth = 31;
let count = 0;

for (let i = 1; i <= augustMonth; i++) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(`Number of days Sakshi is allowed  to go outing is ${count}`);
