// Print N to 1 using recursion

function printNToOne(n){
    if(n == 0)  return;

    console.log(n);
    printNToOne(n - 1);
}

printNToOne(10);