## map
- cria um novo array;
- não modificar o array original;
- realiza operações em ordem;<br/>
`array.map(callback, thisArg)`<br/>
`callback(item, index, array)`<br/>
    - **callback:** função a ser executada em cada elemento;
    - **thisArg:** Opcional, valor de 'this' dentro da função de callback;

### map vs forEach
- valor de retorno;
Considere se o array auxiliar será necessário (se sim, deve usar o map)

## Filter
- Cria um novo array;
- Não modifica o array original;<br />
`array.filter(callback, thisArg)`<br />
    - **callback:** função a ser executada em cada elemento;
    - **thisArg:** Opcional, valor de 'this' dentro da função de callback;

## Reduce
- Executa uma função em todos os elementos do array, retornando um valor único (string, number, array*).<br />
`array.redice(callbackFn, initialValue)`
    - **Callback:** função a ser executada a partir do acumulador;
    - **initialValue:** Opcional, valor sobre o qual o retorno final irá retornar;