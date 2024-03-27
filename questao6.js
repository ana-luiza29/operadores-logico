/*
6. Como você pode verificar se um número está dentro de um intervalo de e um intervalo de 
10 a 20 em JavaScript usando operadores lógicos? */
resposta= 
function verificaIntervalo(numero) {
    return numero >= 10 && numero <= 20;
}

// Exemplo de uso:
var numero1 = 15;
var numero2 = 5;

if (verificaIntervalo(numero1)) {
    console.log(numero1 + " está dentro do intervalo de 10 a 20.");
} else {
    console.log(numero1 + " está fora do intervalo de 10 a 20.");
}

if (verificaIntervalo(numero2)) {
    console.log(numero2 + " está dentro do intervalo de 10 a 20.");
} else {
    console.log(numero2 + " está fora do intervalo de 10 a 20.");
}


 