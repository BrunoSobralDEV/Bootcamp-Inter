# Funções
## Resumo da aula
1. Como declarar funções;
2. Como manipular parâmetros;
3. Loops e outras declarações;
4. Argumento this.

## Função Anônima
- função sem nome, atribuída a uma variável;
- sintaxe: 
```javascript
const soma = function (a, b){
    return a + b;
}
soma(1, 2) // 3
```
## Função autoinvocável
- não precisa criar um comando para chamá-la, será executada automaticamente;
```javascript
(
    function(){
        let name = "Digital Innovation One"
        return name;
    }
)();
```

## Callbacks
- Função passada como argumento para outra.
- Utilizando callbacks, se tem maior controle da ordem de chamdas.

## Valores Padrão