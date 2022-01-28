const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}
function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}
const nums = [1, 2];
//console.log('this -> maçã', mapComThis(nums, maca))
//console.log('this -> laranja', mapComThis(nums, laranja))

//----------//--------------------//--------------------//
//mais utilizado no dia a dia
const nums2 = [2, 4, 6, 8, 10];

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    })
}
// console.log(mapSemThis(nums2))

//----------//--------------------//--------------------//
// FILTER
// filtrar os números pares
function filtraPares(arr) {
    return arr.filter(callback);
}
//callback poderia ter feito direto na função filtraPares
function callback(item) {
    return item % 2 === 0;
}
const meuArray = [1,23,55,67,30,2,4];

// console.log(filtraPares(meuArray))

//----------//--------------------//--------------------//
// REDUCE
//Some todos os números de um array
function somaNumeros(arr) {
  //parâmetros(previousValue, currentValue)
  return arr.reduce(function(prev, current){
      //previous = acumulador
      return prev + current;
  });
}

const  arr = [1,2,4,5,6]

// console.log(somaNumeros(arr));
//----------------------------------------------------
// REDUCE 2
function listaPrecos(arrPrecos, saldoDisponivel) {
    let lista = arrPrecos.reduce(function(prev, current, index){
        console.log({prev})
        console.log({current})
        return prev + current.preco;
    }, 0)

    let saldoFinal = saldoDisponivel - lista;

    return `Total da lista: ${lista} \nSaldo final: R$${saldoDisponivel} - ${lista} = ${saldoFinal}`;
}
const arrP = [2,5,6]

const produtos = [
    {
        name: 'sabao em po',
        preco: 10,
    },
    {
        name: 'cereal',
        preco: 30,
    },
    {
        name: 'toalha',
        preco: 40,
    }
]

console.log(listaPrecos(produtos, 100));