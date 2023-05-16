// =========================================
// --- Tipos de variáveis ---
// =========================================

const constante = 3.1415; 
let variavel = 'ações da bolsa';


// =========================================
// --- Tipos primitivos ---
// =========================================

/* Também chamados de tipos de valor, pois eles recebem um valor */
let nome = 'Samuca';            // string literal
let idade = 18;                 // number literal
let estaAprovado = true;        // boolean literal
let naoDefinido = undefined;    // undefined
let corSelecionada = null;      // nenhuma seleção


// =========================================
// --- Tipos dinâmicos ---
// =========================================

/* método typeof retorna o tipo da variável */
console.log(typeof nome); // 'string'
/* como os tipos são dinâmicos, tu pode mudá-los */
nome = 12;
console.log(typeof nome); // 'number'


// =========================================
// --- Objetos ---
// =========================================

/* Objetos organizam propriedades referentes a um mesmo tópico em chave e valor */
let pessoa = {
    nome : 'Samuca',
    idade : 18,
    estaAprovado : true
}

/* Acessar as propriedades */
pessoa.idade;       // forma mais comum
pessoa['idade'];    // forma que dá mais dinamismo

console.log(pessoa.idade, pessoa['idade']);


// =========================================
// --- Arrays ---
// =========================================

let familia = [10, 20, 57, 86];
console.log(familia[2]); // 57

/* arrays podem conter qualquer tipo de dados */
let ramdom = [2, true, 'eu memo', [1, 2, 3], 'olá'];
console.log(ramdom[3]); // [1, 2, 3]
