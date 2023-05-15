/* 
    Faça um programa para calcular o valor de uma viagem.

    Terá 3 variaveis para trabalhar:
    1-Preço do Combustivel - preço do combustível R$
    2-Valor médio de combustivel do carro por km.
    3-Distância em Km da viagem.

    Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/


    let precoCombustivel = 5.79;//Preço da Gasolina em real.

    let kmPorLitros = 10;//Litros de gasolina consumido por quilometro.

    let distViagem = 110;//Distância em kilometros. 

    let consumoLitros = distViagem / kmPorLitros;//Litros necessários para viagem.

    let precoViagem = consumoLitros * precoCombustivel;//Preço do combustível.

    console.log("Valor para fazer a viagem: R$",precoViagem.toFixed(2));

