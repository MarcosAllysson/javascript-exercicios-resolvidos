//3. Escreva a classe Poligonal, com o método adiciona que acrescenta ty, e o método comprimento,
// que retorna a soma dos comprimentos de todos os segmentos de reta formados.
// 
// Exemplo:
// 
// let poli = new Poligonal();
// poli.adiciona(new Ponto(1,1));
// poli.adiciona(new Ponto(2,4));
// poli.adiciona(new Ponto(5,6));
// poli.adiciona(new Ponto(4,1));
// poli.adiciona(new Ponto(8,2));
// console.log(poli);
// console.log(poli.comprimento());
// Saída esperada:
// 
// Poligonal {
// pontos:
// [ Ponto { x: 1, y: 1 },
//     Ponto { x: 2, y: 4 },
//     Ponto { x: 5, y: 6 },
//     Ponto { x: 4, y: 1 },
//     Ponto { x: 8, y: 2 } ] }
// 15.989954074842814

class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
}

    distancia(p2) {
        let h = 0;
        this.x = (this.x - p2.x);
        this.y = (this.y - p2.y);
        h = Math.pow(this.x,2) + Math.pow( this.y,2);
        
        return Math.sqrt(h);
    }
}

class Poligonal {
    constructor() { this.pontos = []; }

    adiciona(p) { this.pontos.push(p) }

    comprimento(){
        let soma = 0;
            for(let i=0; i <this.pontos.length-1; i++) {
               soma += this.pontos[i]. distancia(this.pontos[i+1])
            }      

        return soma;
    }
}

let poli = new Poligonal();
poli.adiciona(new Ponto(1,1));
poli.adiciona(new Ponto(2,4));
poli.adiciona(new Ponto(5,6));
poli.adiciona(new Ponto(4,1));
poli.adiciona(new Ponto(8,2));
console.log(poli);
console.log("");
console.log(poli.comprimento(poli));
