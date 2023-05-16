// =========================================
// --- Math ---
// =========================================

/* Referência boa - Mozila
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

/* cria um número aleatório de 0 a 1 */
let rand = Math.random();

/* retorna o maior valor dentre os passados */
let maior = Math.max(3, 4, 7, 10);


// =========================================
// --- String ---
// =========================================

/* tipo primitivo */
const stringNormal = 'eu sou string normal';

/* tipo objeto */
const stringObjeto = new String('eu sou uma string objeto');

/* os métodos de strings podem ser usados com amabos formatos */

/* tamanho da string */
stringNormal.length; // 24

/* retorna o elemento 2 */
stringNormal[2]; // ' '

/* está incluso na string? */
stringNormal.includes('eu sou'); // true

/* começa com e termina com */
stringNormal.startsWith('eu '); // true
stringNormal.endsWith('animal'); // false

/* qual o índice do char? */
stringNormal.indexOf('sou'); // 3

/* substituir */
stringNormal.replace('eu', 'tu'); // tu sou uma string objeto

/* tirar espaços do início e do fim */
stringNormal.trim();

/* repartir por */
stringNormal.split(' ');


// =========================================
// --- Template Literal ---
// =========================================

const nome = 'Eu memo';

const mensagemNormal = 'eu sou uma\n' +
                       'mensagem normal para o senhor ' + nome;

const mensagemTemplate = 
`agora é só escrever que nem gente

nova linha é respeitada

usar variáveis é assim: ${nome}

Bom pra escrever emails`;


// =========================================
// --- Date ---
// =========================================

/* Retorna o momento de agora */
const data1 = new Date();

/* passar uma data para a variável */
const date2 = new Date('November 06 2019 09:30');

/* passar os dados um por um */
const date3 = new Date(2021, 10, 10, 08, 07, 00);

/* Métodos usados com Dates */
const dia = date3.getDay;
const dia = date3.setFullYear(2022);

// ToDateString()
// ToTimeString()
// ToISOString()