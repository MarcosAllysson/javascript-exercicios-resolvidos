// 9. Escreva uma função chamada ordenaPorArea que receba um único parâmetro contendo um 
// array de formas e o ordene por ordem crescente de área (use o método sort no array).

// Exemplo:

// let formas = [new Quadrado(10), new TrianguloEq(10), new Quadrado(5), new TrianguloEq(7)];
// ordenaPorArea(formas);
// console.log(formas);
// Saída esperada:

// [ TrianguloEq { lado: 7 },
// Quadrado { lado: 5 },
// TrianguloEq { lado: 10 },
// Quadrado { lado: 10 } ]

function mediaAreas(...argvs) {
    let soma = 0;
    for (let i = 0; i < argvs.length; i++) {
        soma += argvs[i].toString(argvs[i])
    }
    return soma / argvs.length
};

function ordenaPorArea(arrayDeFormas) {
    arrayOrdenar = []
    for (elemento of arrayDeFormas) {
        arrayOrdenar.push(elemento);
    }

    function compare(a, b) { return a.lado > b.lado; }

    return arrayOrdenar.sort(compare)
}

class Forma {
    constructor(lado) { this.lado = lado; }
    toString(q) { return q.area };
};

class Quadrado extends Forma {
    constructor(lado) {
        super(lado);
        this.lado = lado;
    };

    get area() { return Math.pow(this.lado, 2); };
    set area(a) { this.lado = Math.sqrt(a); }

    get perimetro() { return this.lado * 4; };
    set perimetro(p) { this.lado = p / 4; }
};

class TrianguloEq extends Forma {
    constructor(lado) {
        super(lado);
        this.lado = lado;
    };

    get area() { return ((Math.sqrt(3)) * Math.pow(this.lado, 2)) / 4; };
    set area(a) { this.lado = Math.pow(a, 2); }

    get perimetro() { return this.lado * 3; };
    set perimetro(p) { return this.lado / 3; }
};

let formas = [new Quadrado(10), new TrianguloEq(10), new Quadrado(5), new TrianguloEq(7)];
console.log("Ordenado de forma crescente >>>")
console.log(ordenaPorArea(formas));
// console.log("")
// console.log("Array de formas invertido.")
// console.log(formas.reverse());