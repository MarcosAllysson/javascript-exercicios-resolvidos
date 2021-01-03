function temp(celcius){ return celcius; }

let temperaturaRecebida = temp (parseInt (process.argv[2]));

for (let i=-temperaturaRecebida; i<=temperaturaRecebida; i+=5){
	C = 5 / 9 * (i - 32);
	F = (i * 9/5) + 32;
	console.log("Celcius: " +C+ " | Fahrenheit: " +F);
}