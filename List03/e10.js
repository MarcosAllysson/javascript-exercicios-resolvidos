// 10. Escreva um script que use 2 loops for ... in aninhados para percorrer o mesmo objeto anterior e 
// exibir todas as informações contidas nele de alguma maneira organizada. Ao final, exiba uma contagem 
// da quantidade total de famílias e pessoas encontradas.


// for (let f in familias){
//     for (let p in familias[f]){
//         console.log(familias[f]);
//     }
// }

let familias = {
    Flintstones: {},
    Jetsons: {},
    Simpsons: {}
};

familias.Flintstones.pai = 'Fred';
familias.Flintstones.amigo = 'Barney';

familias.Jetsons.pai = 'George';
familias.Jetsons.mae = 'Jane';
familias.Jetsons.filho = 'Elroy';

familias.Simpsons.pai = 'Homer';
familias.Simpsons.mae = 'Marge';
familias.Simpsons.filho = 'Bart';

for (let f in familias){
    // family counter:
    var qFamilia = 0;

    for (let p in familias[f]){ 
        qFamilia +=1; 
        console.log(familias[f][p]); 
    }
}

console.log("");
console.log("Quantidade de famílias encontradas: " + qFamilia);

