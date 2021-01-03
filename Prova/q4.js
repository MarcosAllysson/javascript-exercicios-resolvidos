// 4. [1 ponto] Dado o array de objetos:

// let imagens = [
//     { url: 'ifb.png', altura: 200, largura: 100  },
//     { url: 'cbra.png', altura: 20, largura: 50  },
//     { url: 'tsi.png', altura: 150, largura: 40  }
// ];

// Usando forEach, escreva na tela a área total ocupada por cada uma das imagens.

// A saída deve ser:

// 20000
// 1000
// 6000

let imagens = [
    { url: 'ifb.png', altura: 200, largura: 100  },
    { url: 'cbra.png', altura: 20, largura: 50  },
    { url: 'tsi.png', altura: 150, largura: 40  }
];

let totalArea = imagens.forEach(x => console.log( x.altura * x.largura ) );

console.log( totalArea );
