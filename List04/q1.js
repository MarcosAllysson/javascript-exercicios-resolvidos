// 1. Considerando o array definido da seguinte forma:
// let cores = ['ciano', 'verde', 'amarelo'];
// Escreva um script que exiba o seguinte texto:
// No sistema de cores CYMK, a cor verde é formada pela adição das cores amarelo e ciano.
// Em que as palavras verde, amarelo e ciano devem vir do array.

let cores = ['ciano', 'verde', 'amarelo'];

console.log(`No sistema de cores CYMK, a cor ${cores[1]} é formada pela adição das cores ${cores[2]} e ${cores[0]}.`);