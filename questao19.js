/*
19. Como você pode verificar se um número é ímpar ou menor que 50 em
     
 */
function verificarNumero(numero) {
    if (numero % 2 !== 0 && numero < 50) {
        return true;
    } else {
        return false;
    }
}

var numero = parseInt(prompt("Digite um número: "));

if (verificarNumero(numero)) {
    console.log("O número é ímpar e menor que 50.");
} else {
    console.log("O número não é ímpar ou não é menor que 50.");
}
