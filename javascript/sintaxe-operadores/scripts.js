function compareNumber(num1, num2){
  let iguais = (num1 === num2);
  let soma = num1 + num2;
  let resultSoma;

  if(soma > 10 && soma < 20){
    resultSoma = `Sua soma (${soma}) é maior que 10 e menor que 20`;
  }
  if(soma < 10 && soma < 20){
    resultSoma = `Sua soma (${soma}) é menor que 10 e menor que 20`;
  }
  if(soma < 10 && soma > 20){
    resultSoma = `Sua soma (${soma}) é menor que 10 e maior que 20`;
  }
  if(soma > 10 && soma > 20){
    resultSoma = `Sua soma (${soma}) é maior que 10 e maior que 20`;
  }
  if(soma === 10){
    resultSoma = `Sua soma (${soma}) é igual a 10 e menor que 20`;
  }
  if(soma === 20){
    resultSoma = `Sua soma (${soma}) é maior que 10 e igual a 20`;
  }


  if(iguais){
    console.log(`Input: ${num1} e ${num2}`)
    console.log(`Output: Os números ${num1} e ${num2} são iguais. ${resultSoma}`)
  }else{
    console.log(`Input: ${num1} e ${num2}`)
    console.log(`Output: Os números ${num1} e ${num2} NÃO são iguais. ${resultSoma}`)    
  }
} 
//Os números ${num1} e ${num2} são/não são iguais. Sua soma é maior/menor que 10 e maior/menor que 20.
compareNumber(15, 5)
