//8. Escreva uma função chamada mediaAreas que receba qualquer número
//  de parâmetros contendo formas e retorna e média aritmética das respectivas áreas.

// Exemplo:

// console.log( mediaAreas(
//     new Quadrado(10), new TrianguloEq(10), new Quadrado(5)
// ));

// Saída esperada:
// 56.10042339640731

function mediaAreas(...argvs) {
    let soma = 0;
    for(let i=0; i<argvs.length; i++) {
        soma += argvs[i].toString(argvs[i])
    }
    return soma/argvs.length
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
  
    get area () { return Math.pow(this.lado, 2); };
    set area(a) { this.lado = Math.sqrt(a); }
  
    get perimetro() { return this.lado * 4; };
    set perimetro(p){ this.lado = p/4; }
  };
  
  class TrianguloEq extends Forma {
    constructor(lado) {
        super(lado);
        this.lado = lado;
    };
  
    get area () { return ((Math.sqrt(3))* Math.pow(this.lado,2))/4; };
    set area (a) { this.lado = Math.pow(a, 2); }
  
    get perimetro() { return this.lado * 3; };
    set perimetro(p) { return this.lado /3; }
  };
  
console.log( mediaAreas(
    new Quadrado(10), new TrianguloEq(10), new Quadrado(5)
));

