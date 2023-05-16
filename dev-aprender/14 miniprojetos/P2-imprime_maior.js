function retornaMaior(v1, v2){
    if(v1 >= v2){
        console.log(v1);
    }
    else {
        console.log(v2);
    }
}

retornaMaior(10, 3);

// forma mais eficiente de se escrever
function max(n1, n2){
    return n1 > n2 ? n1 : n2;
}

console.log(max(12, 5));