function media3( a1, a2, a3){ return media3 = (a1+ a2+ a3) / 3; }

let media = media3 (parseInt (process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]));
console.log('Média dos valores recebidos: ' + media);