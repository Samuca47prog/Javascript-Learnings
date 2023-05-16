/*
    00-59   --> F
    60-69   --> D
    70-79   --> C
    80-89   --> B
    90-100  --> A
*/

const Notas = [70, 70, 80, 90];

function media(notas){

    let somaNotas = 0;

    for(let nota of notas){
        somaNotas += nota;
    }

    let media = somaNotas/(notas.length);

    if(media < 60)
        console.log('F');

    else if(media < 70)
        console.log('D');

    else if(media < 80)
        console.log('C');

    else if(media < 90)
        console.log('B');

    else
        console.log('A');


    return media;
}

console.log('media: ' + media(Notas));