const filme = {
    titulo : 'vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'capitao',
}

function printStrings(objeto){
    for(let chave in objeto){
        if(typeof objeto[chave] === "string")
            console.log(chave, objeto[chave]);
    }
}

printStrings(filme);