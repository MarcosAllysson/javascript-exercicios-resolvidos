// 7. Escreva uma função ehPalindromo que receba uma string e retorne um valor booleano 
// (true ou false), dependendo se a string é ou não idêntica quando lida de trás para frente. 

function ehPalindromo(str){
    let ehPa = false;

    var result = '',
        length = str.length;
    while (length--) {
        result += str[length];
    }

    if(str === result){
        ehPa = true;
        console.log(ehPa);
    }
    else { console.log(ehPa); }
}

ehPalindromo('ana');