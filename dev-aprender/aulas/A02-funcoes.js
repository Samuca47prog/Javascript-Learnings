// =========================================
// --- nomenclatura ---
// =========================================

/* verbo + substantivo */
// resetaCor
// calculaCircunferência


// =========================================
// --- Funções sem parâmetro ---
// =========================================

let corEscolhida = 'Azul';

function resetaCor(){
    corEscolhida = '';
}

console.log(corEscolhida); // 'Azul'
resetaCor();
console.log(corEscolhida); // ''


// =========================================
// --- Funções com parâmetro ---
// =========================================

let cor = 'Azul';

function trocaCor(novaCor){
    cor = novaCor;
}

console.log(cor); // 'Azul'
trocaCor('Verde');
console.log(cor); // 'Verde'

// =========================================
// --- Funções com retorno ---
// =========================================

/* Qualquer valor pode ser retornado! */

function calculaQuadrado(lado){
    return lado*lado;
}

console.log(calculaQuadrado(5)); // 25