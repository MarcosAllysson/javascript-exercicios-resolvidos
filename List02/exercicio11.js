let op;
let a;
let b;

function calc(op, a, b){
    op = parseInt(op);
    a = parseInt(a);
    b = parseInt(b);
    adiciona(op, a, b);

    function adiciona(operacao, elemento1, elemento2){
        op = parseInt(operacao);
        a = parseInt(elemento1);   
        b = parseInt(elemento2);
        switch(op){
            case 0:
                console.log("Soma: " + (a + b));
                break;
            case 1:
                console.log("Subtração: " + (a - b));
                break;
            case 2:
                console.log("Multiplicação: " + (a * b));
                break;
            case 3:
                console.log("Divisão: " + (a / b));
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

let math1 = calc(0, 15, 10);
let math2 = calc(1, 15, 10);
let math3 = calc(2, 15, 10);
let math4 = calc(3, 15, 10);
let math5 = calc(4, 15, 10);