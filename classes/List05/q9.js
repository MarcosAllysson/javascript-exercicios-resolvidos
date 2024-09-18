// 9. Utilize sort para ordenar os elementos da lista das questões anteriores por idade. 

let lista = [ 
    {nome: 'Bruna', idade: 28},
    {nome: 'Lucas', idade: 22},
    {nome: 'Martim', idade: 24},
    {nome: 'Júlia', idade: 31},
];

let lista2 = lista.map( x => x.idade );

console.log(lista2.sort());