class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
}

    distancia(p2) {
        let h = 0;
        this.x = (p2.x - p1.x);
        this.y = (p2.y - p1.y);
        h = Math.pow(this.x,2) + Math.pow( this.y,2);
        return Math.sqrt(h);
    }
};

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));
