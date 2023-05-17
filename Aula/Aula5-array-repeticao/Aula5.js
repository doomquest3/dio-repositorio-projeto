/* Arrays e estrutura de repetição */

    const alunoNota = [];

    alunoNota.push(5);
    alunoNota.push(7);
    alunoNota.push(8);
    alunoNota.push(2);
    alunoNota.push(5);


/* Estruturas de repetição */

    let soma = 0;


    for (let index = 0; index < alunoNota.length; index++) {
        let nota = alunoNota[index];
        soma += nota;
        
    }

    soma = soma / alunoNota.length;

    console.log(soma);

