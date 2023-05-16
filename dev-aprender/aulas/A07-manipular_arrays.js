// =========================================
// --- Adcionar elementos ---
// =========================================

let array = [1, 2 ,3];

// --- no início
array.unshift(0);
console.log(array); // [ 0, 1, 2, 3 ]

// --- no meio
array.splice(1,0,'a');
console.log(array); // [ 0, 'a', 1, 2, 3 ]

// --- no final
array.push(5);
console.log(array); // [ 0, 'a', 1, 2, 3, 5 ]


// =========================================
// --- Encontrar elementos primitivos ---
// =========================================

array = [1, 2, 3, 4, 3];

/* retornam -1 quando não encontrado */

// --- primeira ocorrência do valor
console.log(array.indexOf(3)); // 2

// --- última ocorrência do valor
console.log(array.lastIndexOf(3)); // 4

// --- contém esse valor?
console.log(array.includes(3)); // true


// =========================================
// --- Encontrar elementos de referência ---
// =========================================

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
]

/* retorna o objeto cujo nome é 'a' */
let marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca); // { id: 1, nome: 'a' }

// --- usando arrow function
marca = marcas.find((marca) => marca.nome === 'b');

console.log(marca); // { id: 2, nome: 'b' }


// =========================================
// --- Remover elementos ---
// =========================================

 array = [1, 2 ,3, 4, 5];

// --- no início
let primeiro = array.shift();
console.log(primeiro);
console.log(array); // [ 2, 3 , 4, 5 ]

// --- no meio
let thirdElement = array.splice(2,1);
console.log(thirdElement);
console.log(array); // [ 2, 3, 5 ]

// --- no final
let lastElement = array.pop();
console.log(lastElement);
console.log(array); // [ 2, 3 ]


// =========================================
// --- Esvaziando um array ---
// =========================================

let array1 = [1, 2 ,3, 4, 5];
let array2 = [1, 2 ,3, 4, 5];
let array3 = [1, 2 ,3, 4, 5];
let outroArray1 = array1;
let outroArray2 = array2;
let outroArray3 = array3;

// --- solução 1
array1 = [];
// não apaga outras referências

console.log(array1);
console.log(outroArray1);

// --- solução 2
array2.length = 0;
// apaga outras referências

console.log(array2);
console.log(outroArray2);

// --- solução 3
array3.splice(0, array3.length);
// apaga outras referências

console.log(array3);
console.log(outroArray3);

// =========================================
// --- Combinando e dividindo array ---
// =========================================

let first = [1, 2, 3];
let second = [4, 5, 6];

// --- combinar arrays
let combinacao = first.concat(second);

console.log(combinacao); // [ 1, 2, 3, 4, 5, 6 ]

// --- cortar arrays

// do elemento 1 até o 3 (4-1) 
let cortado = combinacao.slice(1, 4);
console.log(cortado);

// do elemento 2 em diante
cortado = combinacao.slice(2); 
console.log(cortado);

// todos os elementos
cortado = combinacao.slice(); 
console.log(cortado);


// =========================================
// --- Operador spread ---
// =========================================

// --- usado para juntar arrays e elementos
let combinados = [...first, 'espaço', ...second, 1];
console.log(combinados);

// --- usado para clonar arrays
let clonado = [...combinados];
console.log(clonado);


// =========================================
// --- Iterar sobre um array ---
// =========================================

let meuArray = ['a', 'b', 'c', 'd'];

meuArray.forEach((valor, indice) => {
    valor = valor + ' eita';
    console.log(valor, indice)
});


// =========================================
// --- juntar e separar os elementos ---
// =========================================

let abcd = ['a', 'b', 'c', 'd'];

// --- juntando os elementos 
let a_b_c_d = abcd.join('-'); 
console.log(a_b_c_d); // a-b-c-d

// --- separando os elementos
let separados = a_b_c_d.split('-');
console.log(separados);
