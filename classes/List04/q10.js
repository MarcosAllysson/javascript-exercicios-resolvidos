// 10. Escreva uma função que receba um array de objetos como o do slide 20 e escreva na tela 
// de forma organizada todas as informações que ele contém. 

function arrayObj(array) {
    for (let a of array) {
        console.log("" +array[a] + " \t ");
    }
}

let usuarios = [
    {
        nome: 'Rodrigo Melo Fernandes', 
        email: 'rodrigo1999@zzzmail.com', 
        categorias: ['premium', 'admin', 'proprietario'],
    },
    {
        nome: 'Letícia Goncalves Azevedo', 
        email: 'lga@dayrep.com', 
        categorias: ['admin'],
    }, 
    {   nome: 'Pedro Almeida Oliveira', 
        email: 'poliv3@armyspy.com', 
        categorias: ['premium', 'promocao'], 
    }
];

arrayObj(usuarios);