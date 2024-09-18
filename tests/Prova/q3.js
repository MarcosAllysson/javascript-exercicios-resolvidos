// 3. [1,2 ponto] Escreva uma função chamada geraTag que receba como único parâmetro um objeto contendo
//  as propriedades url, altura e largura e retorne uma string com a tag HTML para imagem correspondente.

// Por exemplo: para o objeto passado como parâmetro:

// { 
//     url: 'ifb.png', 
//     altura: 200, 
//     largura: 100 
// }

// deve ser retornada a string:

// <img src="ifb.png" width="200" height="100">

function geraTag(obj){
    return ` <img src="${obj.url}" width="${obj.altura}" height="${obj.largura}"> `;
}

let objeto = { 
    url: 'ifb.png', 
    altura: 200, 
    largura: 100 
};

console.log( geraTag(objeto) );
