// Print 1 to N using recursion

function printOneToN(i, n){
    if(i > n)  return;

    console.log(i);
    printOneToN(i + 1, n);
}

printOneToN(1, 10);