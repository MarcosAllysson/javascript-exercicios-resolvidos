// 4 Escreva uma função calcula que receba um array e retorne um objeto contendo a soma e a média 
// aritmética de todos seus elementos. Por exemplo, calcula( [4, 8, 20, 6] ), deve retornar o objeto 
// { soma: 38, media: 9.5 }. A função deve funcionar para arrays de qualquer tamanho.

function calcula(args){
    let total = 0;
    let soma = 0;
    let media = 0;

    for (let i = 0; i < args.length; i+=1){
        soma += args[i];
        total += 1;
    }

    media = soma / total;

    console.log('soma: ' +soma+ ', media: ' +media);
}

calcula( [4, 8, 20, 6] );