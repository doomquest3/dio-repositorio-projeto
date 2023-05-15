/*

    Faça um programa para calcular o valor de uma viagem.

    Você tera as seguintes variáveis, sendo elas:

    1 - Preço do Etanol.
    2 - Preço da Gasolina.
    3 - O tipo de combustivel que está no seu carro.
    4 - Gasto médio de combustivel do carro por km.
    5 - Distância em Km da viagem.

    imprima o valor que será gasto para realizar esta viagem.

*/

    let precoEtanol = 5.79;
    let precoGasolina = 6.66;

    const tipoCombustivelCarro = 'gasolina';

    let kmPorLitros = 10;//Litros de gasolina consumido por quilometro.

    let distViagem = 230;//Distância em kilometros. 

    let consumoLitros = distViagem / kmPorLitros;//Litros necessários para viagem.

    if(tipoCombustivelCarro==='etanol'){
        let precoViagem = consumoLitros * precoEtanol;//Preço do combustível
        console.log(`Preço da viagem com etanol R$ ${precoViagem}`)

    }else{
        let precoViagem = consumoLitros * precoGasolina;//Preço do combustível.
        console.log(`Preço da viagem com gasolina R$ ${precoViagem}`);

    }

    