// 2. Modifique a questão anterior para emitir uma linha de saída separada para cada uma das três propriedades do objeto.

let livro = {
    Titulo: "O Segredo Da Mente Milionária",
    Autor: "T. Harv Eker",
    "Número de páginas": 176
};

console.log("Título do livro: " + livro.Titulo);
console.log("Autor: " + livro.Autor);
console.log("Número de páginas: " + livro["Número de páginas"]);