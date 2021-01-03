// 8. Use filter para filtrar da lista anterior apenas os elementos com idade maior que 25. O resultado deve 
// ser o seguinte:

// [ { nome: 'Bruna', idade: 28 }, { nome: 'Júlia', idade: 31 } ]
// Depois, use o mesmo map da questão anterior para recuperar apenas os nomes. O resultado final deve ser:

// [ 'Bruna', 'Júlia' ]
// (Você pode fazer o filter e o map em um comando só, sem exibir o resultado intermediário)

let lista = [ 
    {nome: 'Bruna', idade: 28},
    {nome: 'Lucas', idade: 22},
    {nome: 'Martim', idade: 24},
    {nome: 'Júlia', idade: 31},
];

let idade = lista.map( function eMaior(lista){
    if(lista.idade > 25){ 
        console.log(lista.nome);
    } 
});

