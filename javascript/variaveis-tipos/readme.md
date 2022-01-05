# Atribuição de Valores

## Case Type
- Original Variable as String `some awesome var`
- Camel Case `someAwesomeVar` - muito utilizada no JS (funções e variáveis)
- Snake Case `some_awesome_var`
- Kebab Case `some-awesome-var`
- Pascal Case `SomeAwesomeVar`
- Upper Case Snake Case `SOME_AWESOME_VAR` - boas práticas pede que seja utilizada para `constantes`

## Variáveis
### Var e Let
- var: escopo global - Pode ser redeclarado
- let: escopo de bloco - Pode ser reatribuida

*utiliza-se camelCase;
*Hoisting: Atribuir valor antes de declarar uma variável, apenas com o `var`;
*Por segurança, dar prioridade ao `let`.

### Const
- Declaradas em SNAKE_UPPER_CASE;
- Escopo de bloco;
- Não faz hoisting;
- Não pode ser reatribuída, nem redeclarar.

# Estrutura de dados do JavaScript
- Tipagem dinâmica e fraca - não precisa informar o tipo da variável antes de declará-la;
- Primitive Types: `numbers, strings, boolean, null, undefined` (Não tem métodos dentro deles e com letra minúscula)
- Composite/Non-Primitive Types: `objects, arrays`

## Strings
- utilizada para textos
- entre aspas ou crases (interpolação)

`new String("blablabla")` = String com letra maiúscula será um `object`
- iterável

**Alguns Métodos**
- `split(",")` = quebrar uma string e retornar uma lista
- `includes('dogs')` = procurar uma palavra, retornar um valor boleano
- `startWith('x')` = começa com x, retorna true/false
- `endsWith('y')` = termina com y, retorna true/false
- `replace(',', '!')` = substituir a vírgula por uma exclamação

**Escape characters in JavaScript**
<table>
Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
</table>

## Numbers
- inteiros ou decimais;
- operações aritméticas;

### Math object
- `Math.floor()` = arredonda pra baixo
- `Math.ceil()`  = arredonda pra cima

## Booleans
- True or False;

## Arrays / Vetores
- Lista iterável de elementos;
- iterabilidade: possibilidade de fazer operações em cada item do array

**Alguns Métodos**
- `push()` = adiciona um item ao final;
- `pop()` = remove o último elemento;
- `shift()` = remove o primeiro elemento;
- `unshift()` = adiciona no início da lista;
- `includes(x)` = saber se 'x' existe no array;
- `reverse()` = retorna o array de trás para frente;

## Objects
- Estrutura tipo "chave e valor";
- sintaxe: `let person = {chave: "valor, chave2: "valor2"}`;
- declarar/retornar: `person.chave` ou `person["chave"]`;
- utilizando colchetes podemos passar variáveis; 
- exemplo para declarar: `person["numberOfSiblings"] = 3`



**Alguns Métodos**
- `Object.keys()` = retorna os chaves
- `Object.values()` = retorna os valores