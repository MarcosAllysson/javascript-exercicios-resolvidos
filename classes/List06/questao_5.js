//5. Escreva classes chamadas TrianguloEq (equilátero) e Quadradoque recebam no construtor um parâmetro para o tamanho do
// lado e tenham métodos chamadas area e perimetro que retornem os valores corretos.
//
// Exemplo:
//
// let t = new TrianguloEq(10);
// console.log(t.perimetro(), t.area());
//
// let q = new Quadrado(10);
// console.log(q.perimetro(), q.area());
// Saída esperada:
//
// 30 43.30127018922193
// 40 100

class TrianguloEq {
    constructor(lado){ this.lado = lado; };

    area () { return ((Math.sqrt(3))* Math.pow(this.lado,2))/4; };
    perimetro() { return this.lado * 3 }
};

class Quadrado {
    constructor(lado) { this.lado = lado };

    area () { return Math.pow(this.lado, 2); };
    perimetro() { return this.lado * 4 }
};

let t = new TrianguloEq(10);
console.log(t.perimetro(), t.area());

let q = new Quadrado(10);
console.log(q.perimetro(), q.area());
