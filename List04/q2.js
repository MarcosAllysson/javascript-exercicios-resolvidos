// 2. Escreva um script que resulte na saída abaixo, construída a partir do array da questão anterior, 
// usando a estrutura for(... ; ... ; ...). Depois refaça o mesmo loop de mais duas maneiras, 
// usando for ... in e for ... of.

// - ciano
// - verde
// - amarelo


let cores = ['ciano', 'verde', 'amarelo'];

console.log("Usando for USUAl: ");
for (let i = 0; i < cores.length; i+=1){ console.log(cores[i]); }
console.log();

console.log("Usando for IN: ");
for( let forIn in cores){ console.log(cores[forIn]); }
console.log();

console.log("Usando for OF: ");
for(let forOf of cores){ console.log(forOf); }
console.log();