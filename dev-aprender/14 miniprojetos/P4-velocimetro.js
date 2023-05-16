// até 70km             --> ok
// a cada 5km a mais    --> 1 ponto na carteira
// acima de 12 pontos   --> carteira suspensa

function velocidadeMaxima(vel){

    // no limite da velocidade -- ok
    if(vel<=70){
        return 'ok';
    }

    let pontosNaCarteira;

    pontosNaCarteira = Math.floor((vel-70) / 5)

    // carteira suspensa
    if(pontosNaCarteira>=12){
        return 'carteira suspensa'
    }

    return ('pontos: ' + pontosNaCarteira);
}

console.log(velocidadeMaxima(81));