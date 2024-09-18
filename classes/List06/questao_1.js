function Ponto(x, y) {
    this.x = x;
    this.y = y;

    this.distancia = function (a) {
        this.x = (a.x - p1.x);
        this.y = (a.y - p1.y);
        h = Math.pow(this.x,2) + Math.pow( this.y,2);
        return Math.sqrt(h);

    }
};

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));
