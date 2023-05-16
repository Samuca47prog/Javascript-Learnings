// constructor function
function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem1 = new Postagem('titulo', 'mensagem', 'ele');

console.log(postagem1);
