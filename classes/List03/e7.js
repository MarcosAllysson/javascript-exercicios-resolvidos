// 7. Partindo do código anterior, transforme as três funções em métodos de um dos objetos.

// De modo que o seguinte código:

// contaX.deposita(800);
// console.log(contaX.nome, contaX.saldo);

// contaX.retira(500);
// console.log(contaX.nome, contaX.saldo);

// contaX.transferePara(contaY, 1000);
// console.log(contaX.nome, contaX.saldo);
// console.log(contaY.nome, contaY.saldo);

// Resulte em:

// José Fontes 1800
// José Fontes 1300
// José Fontes 300
// Felipe Silva 4000

let contaY = { nome: 'Felipe Silva', saldo: 3000};

let contaX = { 
    nome: 'José Fontes', 
    saldo: 1000,
    deposita: function depositar(novoValor){
        this.novoValor = novoValor;
    
        if (novoValor >= 1){ contaX.saldo += novoValor; }
        else { console.log("Valor inferior a R$ 1."); }
    },

    retira: function retira(novoValor){
        this.novoValor = novoValor;
    
        if (novoValor <= contaX.saldo){ contaX.saldo -= novoValor; }
        else { console.log("Valor superior ao saldo desta conta."); }
    },

    transferePara: function transfere(conta2, novoValor){
        this.conta2 = conta2;
        this.novoValor = novoValor;
    
        if (novoValor <= contaX.saldo){ contaX.saldo -= novoValor; contaY.saldo += novoValor; }
        else { console.log("Saldo insuficiente."); }
    }
};

contaX.deposita(800);
console.log(contaX.nome, contaX.saldo);

contaX.retira(500);
console.log(contaX.nome, contaX.saldo);

contaX.transferePara(contaY, 1000);
console.log(contaX.nome, contaX.saldo);
console.log(contaY.nome, contaY.saldo);

