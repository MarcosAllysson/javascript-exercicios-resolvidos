abstract class Aplicacao{
    public abstract metodoAbstrato(): string;
}

class AplicacaoWeb extends Aplicacao{
    public metodoAbstrato(): string {
        return "Aplicação WEB... "
    }
}

class AplicacaoMobile extends Aplicacao{
    public metodoAbstrato(): string {
        return "Aplicação MOBILE... "
    }
}

let aplicacaoM = new AplicacaoMobile;
let aplicacaoW = new AplicacaoWeb;

let array : Aplicacao[] = [aplicacaoM, aplicacaoW];
for(let obj of array){ console.log( obj.metodoAbstrato() ); }