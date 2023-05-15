/* FUNÇÕES EM JAVASCRIPT */

//Procedimento - função que não tem retorno

//Função que retorna IMC.
function calularIMC(peso, altura){
    IMC = peso / Math.pow(altura, 2);
    return IMC;

}

function classificarIMC(IMC){
    if(IMC > 40){
        return (`Você está com obesidade grave! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC > 30 && IMC <= 40){
        return (`Você está obeso! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC > 25 && IMC <= 30){
        return (`Você está acima do peso! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC > 18.5 && IMC <= 25){
        return (`Você está peso normal! seu IMC: ${IMC.toFixed(1)}`);
        
    }else if(IMC < 18.5){
        return (`Você está abaixo do peso! seu IMC: ${IMC.toFixed(1)}`);

    }

}

function incrementoJuros(valor, percentual){
    const valorAcrescimo = (percentual/100) * valor;
    return valor + valorAcrescimo;

}

//Função principal
(function main(){
    console.log(`Seu IMC é: ${calularIMC(70,1.74)}`);
    console.log(classificarIMC(calularIMC(70,1.74)));

})();

/*(Função )();*/ // <-- Forma de criar uma função sem nome, é utilizado na web

//Objeto do tipo função. - uma variavel, por exemplo main2 = main ira funcionar pois ao atribuir ela torna-se um valor.
//Pode manipular funções como manipula um valor ou texto.