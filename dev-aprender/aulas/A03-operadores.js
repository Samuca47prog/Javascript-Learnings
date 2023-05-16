// =========================================
// --- Operadores Aritiméticos ---
// =========================================

/* +, -, *, /, ** */
let valor = 100;
let aux = 2;

console.log(valor + aux);   // 102
console.log(valor - aux);   // 98
console.log(valor * aux);   // 200
console.log(valor / aux);   // 50
console.log(valor ** aux);  // 10000


// =========================================
// --- incremento e decremento ---
// =========================================

/* ++, -- */
let a = 100;

a++; // 101
a--; // 100

a += 5;     // 105
a -= 10;    // 95


// =========================================
// --- operadores de igualdade ---
// =========================================

/* == compara os valores, === compara os valores e os tipos*/
let str = '1';
let num = 1;
console.log(str == num);    // true
console.log(str === num);   // false

str = '2';
num = 3;
console.log(str == num);    // false
console.log(str === num);   // false

str = 1;
num = 1;
console.log(str == num);    // true
console.log(str === num);   // true


// =========================================
// --- operadores ternário ---
// =========================================

/* executa uma expressão lógica e retorna a expressão true ou a false */

let vendas = 100;
let objetivoAtingido;

objetivoAtingido = vendas > 50 ? 'Objetivo Atingido' : 'Não Atingido'

console.log(objetivoAtingido);


// =========================================
// --- operadores Lógicos ---
// =========================================

/* AND  -   &&      --> retorna false a partir do primeiro false */ 
/* OR   -   ||      --> retorna true a partir do primeiro true */
/* NOT  -   !       --> negação */


// =========================================
// --- comparações não booleanas ---
// =========================================

/*  Falsy
    - undefined
    - null
    - 0
    - false
    - ''
    - NaN

    Truthy
    - tudo que não é falsy é retornado
*/