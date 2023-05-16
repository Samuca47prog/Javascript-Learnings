// =========================================
// --- Factory functions ---
// =========================================

/* funções usadas para criar objetos */

function criarCelular(marcaCelular, tamanhoTela){
    return{
        marcaCelular: marcaCelular,
        tamanhoTela: tamanhoTela,
        ligar: function(){
            console.log('fazendo ligação...');
        }

    }

    /* em casos que a chave tem o mesmo nome do valor, pode-se escrever apenas o nome */
    /* 
        {
            marcaCelular,
            tamanhoTela,
            ligar(){
                console.log('fazendo ligação...');
            }
        } 
    */

}

const celularFactory = criarCelular('motorola', 5.4);
console.log(celularFactory);


// =========================================
// --- Constructor functions ---
// =========================================

/* funções usadas para criar objetos também */

function Celular(marcaCelular, tamanhoTela){
    {
        this.marcaCelular = marcaCelular
        this.tamanhoTela = tamanhoTela
        this.ligar = function(){
            console.log('fazendo ligação...');
        }
    }
}

const celularConstructor = new Celular('samsung', 5.0);
console.log(celularConstructor);


// =========================================
// --- Natureza dinâmica de objetos ---
// =========================================

/* declaração do objeto com duas propriedades */
const mouse = {
    cor: 'preto',
    marca: 'logitech'
}

/* adicionaos uma propriedade e um método ao mesmo objeto */
mouse.dpi = 5000;
mouse.trocarDPI = function(){
    console.log('trocando DPI');
}

console.log(mouse);


// =========================================
// --- Clonando objetos ---
// =========================================

const teclado = {
    cor: 'preto',
    marca: 'logitech'
}

/* (destino, fonte) */
/* é possível adicionar propriedades no objeto de destino */
const copia = Object.assign({
    teclas: 'grandes'
}, teclado);

/* outra forma de copiar objetos */
const segundaCopia = {...teclado};