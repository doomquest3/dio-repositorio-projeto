/*
    Uma sala contém 5 alunos e para cada aluno um número de 1 - 100
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dado de entrada;
    5
    50
    10
    98
    23

    Saída
    98

*/


    const { gets, print } = require('../../Aula/Aula6-impor-export/auxFunction');

    let rep = 5;
    let maiorValor = 0;

    for(let i=0; i<rep; i++){
        numero = gets();
        if(numero > maiorValor)
        maiorValor = numero;

    }
    
    console.log(`O maior valor é: ${maiorValor}`);