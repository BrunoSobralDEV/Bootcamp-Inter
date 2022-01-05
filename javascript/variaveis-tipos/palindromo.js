//Solução 1
function verifyPalindromo(string) {
    //se ela for vazia/nula/false, sai da função. 
    //não precisa criar verificação
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string
}
// console.log(verifyPalindromo("gato"))

//Solução 2
function verifyPalindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length -1 - i]){
            return false;
        }
    }

    return true
}

console.log(verifyPalindromo2('gato'))

//Complementar - chegar se string tem !?, caracteres especiais, espaços