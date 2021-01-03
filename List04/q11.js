// 11. Escreva uma função somaMatrizes que receba dois arrays bidimensionais de mesmo tamanho 
// contendo números e retorne outro array bidimensional contendo a soma dos anteriores.

// Por exemplo, se:

// let a = [ [4,5,6], [10,20,30] ];
// let b = [ [1,2,3], [5,8,20] ];

// A chamada de somaMatrizes(a,b) deve retornar [ [ 5, 7, 9 ], [ 15, 28, 50 ] ]. 

function somaMatrizes(ab1, ab2){
    let r = [];
    for(let i = 0; i < ab1.length; i += 1){
        r[i] = [];
        for(let m = 0; m < ab1[i].length; m += 1){
            r[i][m] = ab1[i][m] + ab2[i][m];
        }
    }
    
    return r;
}

let a = [ [4,5,6], [10,20,30] ];
let b = [ [1,2,3], [5,8,20] ];

console.log(somaMatrizes(a, b));

