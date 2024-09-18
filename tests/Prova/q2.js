// 2. [1,2 ponto] Escreva uma função chamada soma que receba como único parâmetro um array contendo 
// números e retorne a soma total destes. A função deve funcionar para arrays de qualquer tamanho.

// Por exemplo: soma([3, 10, 2]) deve retornar o valor 15.

function soma(array){
    let sun = 0;
    
    for(let i = 0; i < array.length; i+=1){
        sun += array[i];
    }
    
    return `Soma: ${sun}`;
}

console.log( soma( [3, 10, 2] ) );