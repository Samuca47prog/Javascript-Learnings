'use strict';

/* 
    link do vídeo: Como consumir uma API de CEP com javascript puro| ViaCEP | #01
    https://www.youtube.com/watch?v=imk6Y0viabg
*/

const cleanFields = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const fulfillFields = (address) => {
    document.getElementById('endereco').value = address.logradouro;
    document.getElementById('bairro').value = address.bairro;
    document.getElementById('cidade').value = address.localidade;
    document.getElementById('estado').value = address.uf;
}

// validate the CEP inputed
/*  tests if its length is equals to 8
    &&
    tests if it starts(^) and ends($) with oneOrMore(+) numbers([0-9])  */
const isValidCEP = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep);

const getCEPdata = async() => {
    // function that is called ever since the cep element is focusedout

    document.getElementById('alert').value = '';

    cleanFields();

    const cep = document.getElementById('cep').value;       // get cep inputed
    const url = `http://viacep.com.br/ws/${cep}/json/`;     // set the url to this cep

    // valids the CEP
    if(isValidCEP(cep)){

        // fetch and .json methods return a promisse that they will answer something
        // because of this asynchronism, async() and await are necessary here
        const data = await fetch(url);
        const address = await data.json();

        // if the CEP was not found, it will feedback a object {error: true}
        if(address.hasOwnProperty('erro')){
            // alerts about the error
            document.getElementById('alert').value = 'CEP incorreto';
        } 
        // if the CEP was found, fulfill the fields
        else{
            // send the address to the function to complete the fields
            fulfillFields(address);
        }

    }

    else{
        cleanFields();
        document.getElementById('alert').value = 'CEP incorreto';
    }

}

// get the element whose ID is CEP
//      listen when focusout the element, and call getCEPdata
document.getElementById('cep')
        .addEventListener('focusout', getCEPdata);