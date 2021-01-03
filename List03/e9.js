// 9. Recrie o objeto composto familias do slide 17 da aula, partindo apenas de objetos vazios (let xxx = {}) 
// e acrescentando as propriedades uma a uma, de modo a obter exatamente o mesmo resultado final.

// let familias = {
//     Flintstones: {
//         pai: 'Fred',
//         amigo: 'Barney'
//     },
//     Jetsons: {
//         pai: 'George',
//         mae: 'Jane',
//         filho: 'Elroy'
//     },
//     Simpsons: {
//         pai: 'Homer',
//         mae: 'Marge',
//         filho: 'Bart'
//     }
// };

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

for (let f in familias) { 
    console.log(familias[f]);
}