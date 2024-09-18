// 7. [1,2 pontos] Crie uma classe chamada Ator, com um construtor que recebe um único 
// argumento para o seu nome, e um método obterNome() que retorna esse nome.

// Por exemplo, o código:

// let uma = new Ator('Uma Thurman');
// console.log(uma.obtemNome());

// Deve escrever na tela Uma Thurman.

class Ator{
    constructor(nome){ this.nome = nome; };

    obterNome(){ return `${this.nome}` };
}

let uma = new Ator('Uma Thurman');
console.log(uma.obterNome()); 