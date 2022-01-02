function calc() {
    const operation = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    
    if(!operation || operation >= 7){
        alert('Erro - operação inválida!');
        calc()
    }else{
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))
        let result;
    
        if(!n1 || !n2){
            alert('Erro - parâmetros inválidos!');
            calc()
        }else{
            function soma() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`)
                newOperation()
            }
            function subtracao() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`)
                newOperation()
            }
            function multiplicacao() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`)
                newOperation()
            }
            function divisaoReal() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`)
                newOperation()
            }
            function divisaoInteira() {
                result = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${result}`)
                newOperation()
            }
            function potenciacao() {
                result = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é = ${result}`)
                newOperation()
            }
        
            function newOperation() {
                let option = prompt('Deseja fazer outra operação?\n1 - Sim\n 2 - Não');
                if(option == 1){
                    calc()
                }else if(option == 2){
                    alert('Até mais!')
                }else{
                    alert('Digite uma opção válida!')
                    newOperation()
                }
            }
        }
    
        /*
        if(operation == 1){
            soma();
        }
        if(operation == 2){
            subtracao();
        }
        if(operation == 3){
            multiplicacao();
        }
        if(operation == 4){
            divisaoReal();
        }
        if(operation == 5){
            divisaoInteira();
        }
        if(operation == 6){
            potenciacao();
        }*/
        switch (operation) {
            case 1:
                soma()
                break;
            case 2:
                subtracao()
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }

    
}

calc()