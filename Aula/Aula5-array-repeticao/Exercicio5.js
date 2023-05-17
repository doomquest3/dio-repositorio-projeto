/* Arrays e estrutura de repetição */

// 1)Crie um programa que dado um número imprima a sua tabuada.

    //let num = 7;

    //console.log(`Tabuada do número: ${num}`);

    for(let i=1; i <= 10; i++){
        
        //console.log(`${num} x ${i} = ${num*i}`);

    }

    // 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado. 

    let list = [7,12,25,42,21,182,1826,129172,16];

    for(let i=0; i < list.length;i++){

        if(list[i] % 2 === 0){
            console.log(`Número: ${list[i]}`);

        }

    }
