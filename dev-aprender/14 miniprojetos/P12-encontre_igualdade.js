// Constructor function
function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

// instanciando as variáveis do tipo Endereco
const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')
const endereco3 = endereco1;

// funcao que compara as propriedades dos objetos
function comparaPropriedades(objeto1, objeto2){
    return objeto1.rua === objeto2.rua &&
            objeto1.cidade === objeto2.cidade &&
            objeto1.cep === objeto2.cep;
}

console.log(comparaPropriedades(endereco1, endereco2)); // true

// compara os enderecos de memoria dos dois objetos
function comparaEnderecosMemoria(objeto1, objeto2){
    return objeto1 === objeto2;
}

console.log(comparaEnderecosMemoria(endereco1, endereco2)); // false
console.log(comparaEnderecosMemoria(endereco1, endereco3)); // true
