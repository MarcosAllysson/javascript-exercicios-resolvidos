// 6. Dados objetos como os seguintes:

// let contaX = { nome: 'José Fontes', saldo: 1000 };
// let contaY = { nome: 'Felipe Silva', saldo: 3000 };

// Escreva 3 funções: deposita(conta, valor), que acrescenta o valor especificado a uma conta; retira(conta, 
// valor), que subtrai o valor especificado; e transfere(conta1, conta2, valor) que transfere dinheiro de 
// uma conta a outra. Escreva código para testar as 3 funções usando os objetos acima.

var contaX = { nome: 'José Fontes', saldo: 1000 };
var contaY = { nome: 'Felipe Silva', saldo: 3000 };

function deposita(conta, novoValor){
    this.conta = conta;
    this.novoValor = novoValor;

    if (conta && novoValor >= 1){ 
        // contaX
        console.log("Conta: " + contaX.nome);
        console.log("Saldo atual: R$ " + contaX.saldo);
        contaX.saldo += novoValor;
        console.log("Saldo após depósito: R$ " + contaX.saldo);
    }

    else { console.log("Conta não existe ou valor inferior a R$ 1."); }
}

function retira(conta, novoValor){
    this.conta = conta;
    this.novoValor = novoValor;

    if (conta && novoValor <= contaY.saldo){ 
        // contaY
        console.log("Conta: " + contaY.nome);
        console.log("Saldo atual: R$ " + contaY.saldo);
        contaY.saldo -= novoValor;
        console.log("Saldo após saque: R$ " + contaY.saldo);
    }

    else { console.log("Conta não existe ou valor superior ao saldo desta conta."); }
}

function  transfere(conta1, conta2, novoValor){
    this.conta1 = conta1;
    this.conta2 = conta2;
    this.novoValor = novoValor;

    if (novoValor <= contaX.saldo){ 
        console.log("Conta: " + contaX.nome + ", transferindo para: " + contaY.nome);
        contaX.saldo -= novoValor;
        contaY.saldo += novoValor;
        
        console.log("Valor da conta X: R$ " + contaX.saldo);
        console.log("Valor da conta Y: R$ " + contaY.saldo);
    }

    else { console.log("Conta não existe ou saldo insuficiente."); }
}

//deposita(contaX, 500);
//retira(contaY, 500);
transfere(contaX, contaY, 1200);
