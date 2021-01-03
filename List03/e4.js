// 4. Escreva uma função chamada obterDescricao que receba um objeto livro e retorne uma string com uma descrição do livro 
// (ex.: "Dom Casmurro, autor: Machado de Assis, 256 páginas"). Teste a função passando como parâmetros ao menos dois objetos diferentes.

function obterDescricao(titulo, autor){    
    return `Livro ${titulo}, autor: ${autor}`
}


console.log(obterDescricao("Questão 4", "Marcos A."));