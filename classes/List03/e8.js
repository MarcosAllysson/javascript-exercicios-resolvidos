// 8. Crie um objeto chamado pessoa com duas propriedades comuns, primeiroNome e ultimoNome, e uma 
// propriedade get/set chamada nome. Ao se obter o valor de nome, deve ser retornada a concatenação 
// de primeiro e último nomes. Ao se modificar o valor de nome, deve ser modificado o primeiro nome, 
// e o último nome deve ser a string vazia. Por exemplo, o seguinte código:

// pessoa.primeiroNome = 'Lucas';
// pessoa.ultimoNome = 'Barbosa';
// console.log(pessoa.nome);

// pessoa.nome = 'Mariana'
// console.log(pessoa.nome);

// Deve resultar em:

// Lucas Barbosa
// Mariana 

let pessoa = {
    primeiroNome: "Lucas",
    ultimoNome: "Barbosa",
    
    get nome(){ return this.primeiroNome + " " +this.ultimoNome; }, 
    set nome(nome) { this.primeiroNome = nome; this.ultimoNome = ""; }
}

pessoa.primeiroNome = 'Lucas';
pessoa.ultimoNome = 'Barbosa';
console.log(pessoa.nome);

pessoa.nome = 'Mariana'
console.log(pessoa.nome);