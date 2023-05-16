// primeira forma
let faixas = [
    {tooltip: 'ate 100', min: 0, max: 100},
    {tooltip: '100 ou mais', min: 100, max: 99999},
]

// segunda forma (factory function)
function criaFaixa(tooltip, min, max){
    return{
        tooltip,
        min,
        max
    }
}

let faixas2 = [
    criaFaixa('a', 0, 1000),
    criaFaixa('b', 1000, 99999),
]

// terceira forma (constructor function)
function FaixaPreco(tooltip, min, max){
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let faixas3 = [
    new FaixaPreco('c', 0, 1000),
    new FaixaPreco('d', 1000, 99999)
]

