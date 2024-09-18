//4. Crie a classe Livro e uma subclasse EBook de modo que o exemplo abaixo produza o resultado demonstrado.
//
// (O método obterDescricao deve ser definido apenas em Livro e o construtor de EBook deve usar super para chamar o construtor de sua superclasse.
//
// Exemplo:
//
// let dom = new Livro('Dom Casmurro', 'Machado de Assis', 256);
// let hp = new EBook('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 309, 420);
// console.log(dom.obterDescricao());
// console.log(hp.obterDescricao());
// console.log(hp.obterTamanho());
// Saída esperada:
//
// "Dom Casmurro", autor: Machado de Assis, 256 páginas
// "Harry Potter e a Pedra Filosofal", autor: J. K. Rowling, 309 páginas
// 420.kb

class Livro {
    constructor (livro, autor, paginas){
        this.livro = livro;
        this.autor = autor;
        this.paginas = paginas;
    };

    obterDescricao() {
        return `${this.livro} , autor:${this.autor} ${this.paginas} páginas`
        };
    };

class EBook extends Livro {
    constructor(livro, autor, paginas, tamanho) {
        super(livro, autor, paginas);
        this.tamanho = tamanho;
    }

    obterTamanho() { return `${this.tamanho}.kb`; };

};

let dom = new Livro('Dom Casmurro', 'Machado de Assis', 256);
let hp = new EBook('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 309, 420);


console.log(dom.obterDescricao());
console.log(hp.obterDescricao());
console.log(hp.obterTamanho());