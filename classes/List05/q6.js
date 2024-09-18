//6. Replique a mesma saída do exercício 3 usando map no lugar da função fazEmTodos.


let lista = [2, 3, 4, 5];

const dobro = lista.map( x => x*2 );
const metade = lista.map( x => x*x );
console.log(dobro);
console.log(metade);