// 8. [2 pontos] Usando o código da questão anterior, crie uma classe Filme, cujo construtor receba 
// 3 parâmetros que especificam propriedades internas: título (string), diretor (string) e atores 
// (array de objetos Ator).

// Crie um método adicionaAtor(ator) que acrescenta um objeto dado ao array interno de atores, e um
//  método escreveDescricao() que escreve na tela uma listagem como a do exemplo abaixo.

// Por exemplo, o código:

// let uma = new Ator('Uma Thurman');
// let pulp = new Filme(
//     'Pulp Fiction', 'Quentin Tarantino', [ uma, new Ator('John Travolta') ]
// );
// pulp.adicionaAtor(new Ator('Samuel L. Jackson'));

// pulp.escreveDescricao();

// Deve resultar em algo como:

// "Pulp Fiction", diretor: Quentin Tarantino
// Elenco:
// - Uma Thurman
// - John Travolta
// - Samuel L. Jackson

class Ator{
    constructor(nome){ this.nome = nome; }; // [nome];
     
    obterNome(){ return `${this.nome}` };
}

class Filme extends Ator{
    constructor( titulo, diretor, atores ){ //(array de objetos Ator).
        super(atores);
        this.titulo = titulo;
        this.diretor = diretor;
        this.atores = [];
    }

    adicionaAtor(ator){ this.nome.push(ator); }

    escreveDescricao(){
        console.log( `"${this.titulo}", diretor: ${this.diretor} \n Elenco: ` );

        for(let i = 0; i < this.nome.length; i += 1){
            console.log(' - ' + this.nome[i].nome );
        }
    }
}

let uma = new Ator('Uma Thurman');
let pulp = new Filme(
    'Pulp Fiction', 'Quentin Tarantino', [ uma, new Ator('John Travolta') ]
);
pulp.adicionaAtor(new Ator('Samuel L. Jackson'));

pulp.escreveDescricao();



