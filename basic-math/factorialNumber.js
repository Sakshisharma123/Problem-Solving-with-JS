let fact = 4;
let originalFact = fact;

for(let i = originalFact; i> 1; i--){
    fact = fact * ( i - 1);
}

console.log(`Factorial Number: ${fact}`);