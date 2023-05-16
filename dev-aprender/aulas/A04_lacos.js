// =========================================
// --- If else ---
// =========================================

let condicao = true;

if(condicao){
    console.log('é verdade')
}
else{
    console.log('é mentira')
}


// =========================================
// --- Switch case ---
// =========================================

let permissao;

switch(permissao){
    case 'comum':
        console.log('permissão comum');
    break;

    case 'premium':
        console.log('permissão premium');
    break;

    default:
        console.log('permissão não encontrada');
    break;
}


// =========================================
// --- For clássico ---
// =========================================

/* igual ao C */

for(let i=0; i<10; i++){
    console.log('iteração: ' + i);
}


// =========================================
// --- While clássico ---
// =========================================

/* igual ao C */

let j=0;

while(j<10){
    console.log('passada de número: ' + j);
    j++;
}


// =========================================
// --- Do While clássico ---
// =========================================

/* igual ao C */

let k=0;

do{
    console.log('passada de número: ' + k);
    k++;
} while(k<10)


// =========================================
// --- For in ---
// =========================================

/* loop para iterar sobre propriedades de um objeto */

let pessoa = {
    nome : 'Samuca',
    idade : 18,
    estaAprovado : true
}

for(let chave in pessoa){
    // imprime a chave e o valor da propriedade
    console.log('o valor da chave ' + chave + ' é ' + pessoa[chave]);
}


// =========================================
// --- For of ---
// =========================================

/* loop para iterar sobre indices de um array */

let ramdom = [2, true, 'eu memo', [1, 2, 3], 'olá'];

for(let posicao of ramdom){
    // imprime os valores de cada índice
    console.log(posicao);
}