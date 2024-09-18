// 5. [1 ponto] A partir do mesmo array da questão anterior, use map para gerar um array chamado 
// areas, de modo que:

// console.log(areas);

// Resulte em:

// [ 20000, 1000, 6000 ]

let imagens = [
    { url: 'ifb.png', altura: 200, largura: 100  },
    { url: 'cbra.png', altura: 20, largura: 50  },
    { url: 'tsi.png', altura: 150, largura: 40  }
];

let areas = [];
areas = imagens.map( x => x.largura * x.altura );

console.log(areas);
