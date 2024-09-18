// 5. Escreva uma função chamada criaLivro que receba 3 parâmetros: título, autor e 
// número de páginas e retorne um objeto livro com os respectivos valores.
// Teste o objeto criado, passando-o como parâmetro para a função da questão anterior.

function criaLivro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;

    return `Título do livro é: ${this.titulo}, autor é o ${this.autor} e possui ${this.paginas} páginas.`
}

console.log(criaLivro("Livro 1", "escritor Dr.Fulano", "254"));