// 2. Aproveitando os mesmos objetos dobra e quadrado da questão anterior, crie um array de operações que começa assim:

// let operacoes = [ dobra, quadrado, ... ]

// Preencha os itens restantes do array com duas funções anônimas, uma que retorne a metade, e a outra, o negativo do valor passado. 
// Percorra esse array com um loop for chamando todas as funções com um mesmo parâmetro e escrevendo o resultado na tela. Por exemplo, 
// para o parâmetro 8, a saída deve ser:

// 16
// 64
// 4
// -8


function dobra(n){ console.log(n * 2); }
//function dobra(n){ return n * 2; }

function quadrado(n){ console.log(n ** 2); }
//function quadrado(n){ return n ** 2; }

let operacoes = [ 
	dobra, 
	quadrado, 
	(n) => { console.log(n / 2);  }, 
	(n) => { console.log(n * -1); }  
	];


for (let i = 0; i < 1; i+=1){
	//dobra(8);
	//quadrado(8);
	//metade(8);
	//negativo(8);
	operacoes[0](8);
	operacoes[1](8);
	operacoes[2](8);
	operacoes[3](8);
}

