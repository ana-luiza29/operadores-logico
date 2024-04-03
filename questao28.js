/*
28. Como você pode verificar se uma pessoa é adolescente (idade entre 13 
e 19 anos) em JavaScript usando operadores lógicos? 
*/
function verificarAdolescente(idade) {
    if (idade >= 13 && idade <= 19) {
        return true;
    } else {
        return false;
    }
}

var idade = parseInt(prompt("Digite a idade da pessoa: "));

if (verificarAdolescente(idade)) {
    console.log("A pessoa é adolescente.");
} else {
    console.log("A pessoa não é adolescente.");
}
