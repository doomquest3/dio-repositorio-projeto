/*

    Faça um algoritmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
    sua média e a sua classificação conforme a tabela abaixo.

    Classificação:
    - Média menor que 5, reprovado.
    - Média entre 5 e 7, recuperação.
    - Média acima de 7, passou de semestre.

*/

    let nota1 = 5;
    let nota2 = 5;
    let nota3 = 5;

    let media = (nota1 + nota2 + nota3) / 3;

    if(media > 7){
        console.log(`Aluno foi aprovado e passou de semestre! Média das notas: ${media.toFixed(1)}`);

    }else if(media >= 5 && media <=7){
        console.log(`Aluno está de recuperação! Média das notas: ${media.toFixed(1)}`);

    }else if(media<5){
        console.log(`Aluno está reprovado! Média das notas: ${media.toFixed(1)}`);

    }