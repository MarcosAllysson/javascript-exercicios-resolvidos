// 6. Escreva uma função somaArrays, a qual receba dois arrays de mesmo tamanho (qualquer) e retorne 
// um array, também de mesmo tamanho, em que cada elemento é a soma dos valores correspondentes das entradas.

// Por exemplo, se:
// let a = [ 4, 5, 10 ];
// let b = [ 2, 3, 8 ];
// A chamada de somaArrays(a,b) deve retornar o array [ 6, 8, 18 ].

function somaArrays(array1, array2) {
    let soma = [];

    if (array1.length == array2.length) {
        //soma = [0, 0, 0];

        for (let a = 0; a < array1.length; a += 1) {
            //console.log(array1[a]);

            for (let b = 0; b < array2.length; b += 1) {
                //console.log(array2[b]);

                for (let s = 0; s < array2.length; s += 1) {
                    //soma.push(array1[a] + array2[b]);
                    soma = array1[a] += array2[b];
                    //console.log();
                    //console.log(array1[a]);
                    //console.log(array2[b]);
                    //console.log(soma[s]);
                }
            }
        }
        //console.log('soma: [ ' +soma+ ' ]');
    }

    else { console.log('Arrays de tamanho diferente.'); }
}


let a = [4, 5, 10];
let b = [2, 3, 8];



function somaArray(a, b){
    for(let array1 of a){
        console.log(array1);    
    }

    for(let array2 of b){   
        console.log(array2);    
    }
} 

somaArray(a, b);