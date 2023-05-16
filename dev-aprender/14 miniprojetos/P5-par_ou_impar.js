function parOuImpar(entrada){

    for(let i=0; i<entrada; i++){
        if(i%2 === 0){
            console.log(i + " Par");
        }
        else{
            console.log(i + " Impar");
        }
    }
}

parOuImpar(10);