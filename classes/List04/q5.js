// 5 Modifique a função anterior para que ela seja chamada com um número variável de argumentos 
// numéricos, ao invés de um array. Por exemplo, calcula(4, 8, 20, 6), deve retornar o objeto 
// { soma: 38, media: 9.5 }.

function calcula(...args){
    let soma = 0;
    let total = 0;
    let media;

    for(let m = 0; m < args.length; m+=1){
        soma += args[m];
        total += 1;
    }

    media = soma / total;

    console.log('soma: ' +soma+ ', media: ' +media);
}

calcula(4, 8, 20, 6);