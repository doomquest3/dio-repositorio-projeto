/*
    O IMC - Indice de Massa Corporal é um critério  da organização mundial da saúde para dar uma indicação sobre
    a condição de pesos de uma pessoa adulta.

    Formula do IMC
    IMC = peso / (altura *  altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos condição;
    - Abaixo de 18.5 abaixo do peso.
    - Entre 18.5 e 25 peso normal.
    - Entre 25 e 30 acima do peso.
    - Entre 30 e 40 obeso.
    - Acima de 40 obesidade grave.
    
    Math.pow(número,potência) -> Função da biblioteca de matemática para fazer potência.
*/

    let peso = 70;
    let altura = 1.74;
    let IMC;

    IMC = peso / Math.pow(altura,2);

    if(IMC > 40){
        console.log(`Você está com obesidade grave! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC > 30 && IMC <= 40){
        console.log(`Você está obeso! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC > 25 && IMC <= 30){
        console.log(`Você está acima do peso! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC > 18.5 && IMC <= 25){
        console.log(`Você está peso normal! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC < 18.5){
        console.log(`Você está abaixo do peso! seu IMC: ${IMC.toFixed(1)}`);

    }

