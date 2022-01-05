function bootcamp(num1, num2) {
  let result = '';  
  if(isEqual(num1, num2)) {
    result = `Os números ${num1} e ${num2} são iguais. `;
  } else {
    result = `Os números ${num1} e ${num2} não são iguais. `;
  }

  if(isGreaterThan10(num1 + num2) && isLessThan20(num1 + num2)) {
    result = result + `Sua soma é ${num1 + num2}, que é maior que 10 e menor que 20.`
  }
  if(isGreaterThan20(num1 + num2)) {
    result = result + `Sua soma é ${num1 + num2}, que é maior que 10 e maior que 20.`
  }
  if(isLessThan10(num1 + num2)) {
    result = result + `Sua soma é ${num1 + num2}, que é menor que 10 e menor que 20.`
  }
  if(isEqualTo10(num1 + num2)) {
    result = result + `Sua soma é ${num1 + num2}, que é igual a 10.`
  }
  if(isEqualTo20(num1 + num2)) {
    result = result + `Sua soma é ${num1 + num2}, que é igual a 20.`
  }
  console.log(result);
}

function isEqual(num1, num2) {
  return num1 - num2 === 0;
}

function isGreaterThan10(sum) {
  return sum > 10;
}

function isGreaterThan20(sum) {
  return sum > 20;
}

function isLessThan10(sum) {
  return sum < 10;
}

function isLessThan20(sum) {
  return sum < 20;
}

function isEqualTo10(sum) {
  return sum === 10;
}

function isEqualTo20(sum) {
  return sum === 20;
}

bootcamp(10, 10)
bootcamp(10, 5)
bootcamp(5, 5)
bootcamp(3, 5)
bootcamp(12, 10)
bootcamp(8, 8)