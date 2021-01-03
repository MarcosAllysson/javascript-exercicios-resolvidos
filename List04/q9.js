// 9. Escreva uma função que receba um array bidimensional e escreva-o na tela como uma tabela 
// com linhas e colunas separadas por tabulação ("\t").

// Por exemplo, para o array do slide 19, o resultado deve ser:

// Fred    Barney
// George  Jane    Elroy
// Homer   Marge   Bart
 
function arrayBidi(array){
    for(let a in array){
        console.log(array[a] + " \n ");    
    }
}

let familia = [
    [ "Fred",   "Barney" ],
    [ "George", "Jane",  "Elroy" ],
    [ "Homer",  "Marge", "Bart" ]
];

arrayBidi(familia);

