function ehPrimo(numero){ return numero; }

let numeroRecebido = ehPrimo(parseInt (process.argv[2]));

let divisor = 0;

// verificação se é primo
for (let i = 2; i <= numeroRecebido; i+=1){
    if (numeroRecebido % i === 0) { divisor +=1; }
    if (numeroRecebido / i === 1){ divisor +=1; }
}

// printa o resultado
if (divisor === 2){ console.log("O número " +numeroRecebido+ " é primo."); }
else { console.log("O número " +numeroRecebido+ " não é primo."); }