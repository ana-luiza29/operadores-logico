/*
24. Como você pode verificar se um número é múltiplo de 3 ou 5 em 
JavaScript usando operadores lógicos? 
 */
function verificarMultiplo(numero) {
    if (numero % 3 === 0 || numero % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

var numero = parseInt(prompt("Digite um número: "));

if (verificarMultiplo(numero)) {
    console.log("O número é múltiplo de 3 ou 5.");
} else {
    console.log("O número não é múltiplo de 3 ou 5.");
}
