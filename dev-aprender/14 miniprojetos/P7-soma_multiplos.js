// soma todos os múltiplos de 3 e de 5 em um determinado range.

function somaMultiplos(intervalo){

    let soma = 0;

    for(let i=0; i<=intervalo; i++){
        // entra se for divisível por 3 ou por 5 no intervalo
        if((i%3 === 0) || (i%5 === 0)){
            soma += i; 
        }
    }

    return soma;
}

console.log(somaMultiplos(15));