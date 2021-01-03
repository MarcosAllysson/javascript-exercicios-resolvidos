// 8. Escreva uma função inverte que retorna o inverso de uma string dada. Utilize métodos de 
// string e array, sem nenhuma estrutura de loop.

// Ex.: O resultado de inverte('Abacaxi') deve ser ixacabA. 

function inverte(str){
    var result = '',
        length = str.length;
    
    while (length--) { result += str[length]; }
    
    console.log(result);
}

inverte('marx');