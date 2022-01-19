class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        //sempre que for trabalhar com getter/setter colocar um "-" na frente, assim podemos usar o "nome" no getter/setter
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada. Saldo insuficiente"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
    }
}