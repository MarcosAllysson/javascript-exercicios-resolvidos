// 3. Ainda aproveitando dobra e quadrado, escreva a função fazEmTodos(oque, array), de modo que a saída de:

// let lista = [2,3,4,5];
// console.log( fazEmTodos(dobra, lista) );
// console.log( fazEmTodos(quadrado, lista) );

// Seja a seguinte:

// [ 4, 6, 8, 10 ]
// [ 4, 9, 16, 25 ]


function dobra(n){ 
	let re = []; 
	for (let i = 0; i < n.length; i +=1){
		re[i] = (n[i] * 2); 	
	}
	console.log(re);
}

function quadrado(n){ 
	let re = [];  

	for (let i = 0; i < n.length; i +=1){
		re[i] = (n[i] ** 2); 	
	}
	
	console.log(re);
}

function fazEmTodos(oque, array){
	return oque(array);
}

let lista = [2, 3, 4, 5];
console.log( fazEmTodos(dobra, lista) );
console.log( fazEmTodos(quadrado, lista) );