// ncr = !n/!r(!n-!r)

let n = 5;
let r = 2;
let factN = 1;
let factR = 1;
let factP = 1;
let ncr;
let p = n-r;

for(let i = 0;  i<n; i++){
   factN = factN *  (n -i);

}
for(let i = 0;  i<r; i++){ 
   factR = factR *  (r -i);  
}

for(let i = 0;  i<p; i++){ 
   factP = factP *  (p -i);  
}

ncr = factN/ ( factR * factP);
console.log(ncr);



