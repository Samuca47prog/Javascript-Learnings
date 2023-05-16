// div por 3        --> Fizz
// div por 5        --> Buzz
// div ambos        --> FizzBuzz
// Não divisível    --> entrada
// NaN              --> Não é um número

function FizzBuzz(entrada){
    
    // Se a entrada não for um número, retorna NaN
    if(typeof entrada !== 'number'){
        return 'Não é Número';
    }

    // divisível por 5 e por 3 -- resultado = 3
    if((entrada%5 == 0) && (entrada%3 == 0)){
        return 'FizzBuzz';
    }

    // divisível por 3 -- resultado = 1
    if(entrada % 3 == 0){
        return 'Fizz';
    }

    // divisível por 5 -- resultado = 2
    if(entrada % 5 == 0){
        return 'Buzz';
    }

    return entrada;
}

console.log(FizzBuzz(15));