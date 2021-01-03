//7. Transforme os métodos area e perimetro das classes anteriores em chamadas get e faça as modificações correspondentes.
// Ao menos para Quadrado, escreva também chamadas as chamadas set correspondentes.
//
// Exemplo:
//
// let q = new Quadrado(5);
// console.log(q.toString());
//
// q.perimetro = 32;
// console.log(q.toString());
//
// q.area = 100;
// console.log(q.toString());
// Saída esperada:

//
//let q = new Quadrado(5);
// console.log(q.toString());

// q.perimetro = 32;
// console.log(q.toString());

// q.area = 100;
// console.log(q.toString());
// Saída esperada:

// p=20, a=25
// p=32, a=64
// p=40, a=100

class Forma {
  toString(q) { return `p=${q.perimetro} a=${q.area} `; };
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

let q = new Quadrado(5);
console.log(q.toString(q));

q.perimetro = 32;
console.log(q.toString(q));
q.area = 100;
console.log(q.toString(q));



//https://coryrylan.com/blog/javascript-es6-class-syntax