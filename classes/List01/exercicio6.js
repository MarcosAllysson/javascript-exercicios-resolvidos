let a = parseInt (process.argv[2]);
let b = parseInt (process.argv[3]);
let c = parseInt (process.argv[4]);

let maior;

if(a >= b && a >= c)
	maior = a;
else if (b >= a && b >= c)
	maior = b;
else if (c >= a && c >= b)
	maior = c;

console.log("Maior: " + maior);