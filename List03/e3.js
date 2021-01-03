// 3. Modifique a questão anterior para percorrer o objeto com uma estrutura de loop e escrever na saída automaticamente todas as 
// propriedades e valores, uma por linha.

let livro = {
    Titulo: "O Segredo Da Mente Milionária",
    Autor: "T. Harv Eker",
    "Número de páginas": 176
};

for (let l in livro){ console.log(l + ": " +livro[l]); }




