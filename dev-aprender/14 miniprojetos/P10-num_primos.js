function primos(limite){
    for(let numeroAtual = 2; numeroAtual <= limite; numeroAtual++){

        let primoSim = true;
        primoSim = true;

        for(let divisor = 2; divisor < numeroAtual; divisor++){

            //entra se for divisivel por qualquer um que não for 1 ou ele mesmo
            if(numeroAtual%divisor === 0){
                primoSim = false;
                break;
            }
        }

        if(primoSim){
            console.log(numeroAtual + ' é primo!');
        }
    }
}

primos(100);