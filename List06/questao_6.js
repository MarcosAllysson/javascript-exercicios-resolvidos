//6. Crie uma classe Forma e transforme Quadrado e TrianguloEq em suas subclasses. Acrescente o método toString a Forma
// de modo que o seguinte código:
//
// let formas = [ new Quadrado(5), new Quadrado(10),
//                new TrianguloEq(5), new TrianguloEq(10) ];
// for(forma of formas){
//     console.log(`${forma.constructor.name}: ${forma.toString()}`);
// }
// Resulte em:
//
// Quadrado: p=20, a=25
// Quadrado: p=40, a=100
// TrianguloEq: p=15, a=10.825317547305483
// TrianguloEq: p=30, a=43.30127018922193

class Forma {
    toString(a) {
        return `p=${a.perimetro()} a=${a.area()} `;
    };
};

class Quadrado extends Forma {
    constructor(lado) {
        super(lado);
        this.lado = lado;
    };

    area () { return Math.pow(this.lado, 2); };
    perimetro() { return this.lado * 4; };
};

class TrianguloEq extends Forma {
    constructor(lado) {
        super(lado);
        this.lado = lado;
    };

    area () { return ((Math.sqrt(3))* Math.pow(this.lado,2))/4; };
    perimetro() { return this.lado * 3 };
};


let formas = [ new Quadrado(5), new Quadrado(10), new TrianguloEq(5), new TrianguloEq(10) ];

for(forma of formas){
    console.log(`${forma.constructor.name}: ${forma.toString(forma)}`);
};