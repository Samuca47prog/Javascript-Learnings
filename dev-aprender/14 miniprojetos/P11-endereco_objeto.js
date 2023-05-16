let endereco = {
    rua : 'Cel. Genuíno Sampaio',
    cidade : 'São Leopoldo',
    CEP : 93135070,
};

function exibirObjeto(objeto) {
    for(let chave in objeto){
        console.log(chave, objeto[chave]);
    }
}

exibirObjeto(endereco);
