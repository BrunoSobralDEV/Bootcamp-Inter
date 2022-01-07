# Funções
## Resumo da aula
1. Como declarar funções;
2. Como manipular parâmetros;
3. Loops e outras declarações;
4. Argumento this.
# Tipos
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

# Parâmetros    
## Valores Padrão
`function exponencial(array, num = 1)`. O `= 1` será o valor padrão, caso seja `undefined`.

## Objeto "arguments"
- Nº indefinido de argumentos. 
- Posso usar o `arguments` quando não souber quantos argumentos seram passados.
```javascript
function findMax(){
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
```

## Arrays
**Spread**: Uma forma de lidar separadamente com elementos;
- Sintaxe: `...nomeDaVariavel`;
- Usa quando chama a função.
```javascript
function sum(x, y, z){
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
```

**Rest**: 
- Combina os elementos em um array;
- usa quando está declarando a função;

## Objetos
**Object Destructuring**
- Entre `{}` podemos filtrar apenas os dados que nos interessa em um objeto.

# Loops

## If/else e Switch
- No JavaScript o `else if` é separado;
- `Switch` ideal para quando se precisa comprar muitos valores e ele compara tipo e valor (===).

## For e While
- **For**: Loop dentro de elementos iteráveis (arrays, strings);
- **For...in/For...of**
- **While**: executa até que a condição se torne falsa;
- **Do...While**: diferença que a primeira execução sempre ocorre.

# This
- É uma referência de contexto. Seu valor muda de acordo com o contexto;

|Contexto   |  Referência |
|   ---     |     ---     |
|Em um objeto(método)   |Próprio objeto dono do método   |
|Sozinha   |Objeto global (em navegadores, window)   |
|Função   |Objeto global   |
|Evento   |Elemento que recebeu o evento   |