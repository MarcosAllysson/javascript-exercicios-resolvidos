// 3. Sem modificar a linha inicial que cria o array com 3 elementos, use uma instrução com o método 
// splice e outra com o método push, de modo a resultar no array que gera a seguinte saída:

// - ciano
// - roxo
// - laranja
// - verde
// - amarelo
// - cinza

let cores = ['ciano', 'roxo', 'laranja'];
cores.push('verde');
cores.splice(4, 2, 'amarelo', 'cinza');

console.log(cores);