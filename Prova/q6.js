// 6. [1,8 ponto] Dada a seguinte função:

// function criaObjeto(n, funcao){
//     return {
//         numero: n,
//         resultado: funcao(n)
//     }
// }

// Sem modificar o código da função acima, escreva duas chamadas a ela, com os parâmetros 
// apropriados, atribuindo os resultados a novas variáveis chamadas obj1 e obj2, de modo que o código:

// console.log(obj1);
// console.log(obj2);

// Resulte em:

// { numero: 10, resultado: 20 }
// { numero: 4, resultado: 16 }

function criaObjeto(n, funcao){
    return {
        numero: n,
        resultado:  funcao(n) 
    }
}

let dobro = function(x){ return x*2; }

let quadrado = y => y ** 2;

let obj1 = criaObjeto(10, dobro);
let obj2 = criaObjeto(4, quadrado); 


console.log(obj1);
console.log(obj2);