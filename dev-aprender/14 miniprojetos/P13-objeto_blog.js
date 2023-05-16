let postagem = {
    titulo : 'título',
    mensagem : 'mensagem',
    autor : 'Eu memo',
    vizualizacoes : 1000,
    comentarios : [
        {autor : 'anonimo1', mensagem : 'legal!'},
        {autor : 'anonimo2', mensagem : 'legal!'},
        {autor : 'anonimo3', mensagem : 'legal!'}
    ],
    estaAoVivo : false
}

console.log(postagem);

console.log(postagem.comentarios[2].autor);