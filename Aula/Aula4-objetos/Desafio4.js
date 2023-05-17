/* Exercício de objeto e classe */

/*
    - Crie uma classe para representar carros -

    Os carros possuim:
    - Uma marca.
    - Gasto médio de combustível por kilometro rodado.
    
    Crie um método que dado a quantidade de quilomêtros e o preço de combustível nos dê o valor gasto
    em reais para realizar este percurso.
    Classe sempre começa com letra maiúscula.

*/

class Carro{
    cor;
    marca;
    gastoCombustivel;

    constructor(cor, marca, gastoCombustivel) {
        this.cor = cor;
        this.marca = marca;
        this.gastoCombustivel = gastoCombustivel;// litro divido pela distância percorrida para obter o gasto médio

    }

    consumoGasDistancia(distanciaKm, preco){
        let consumo = distanciaKm * this.gastoCombustivel; //distância multiplicada pelo consumo de gasolina.
        console.log(`A quantidade de livros de gasolina necessários para a viagem é ${consumo.toFixed(2)} litros!`);
        console.log(`O custo do preço do combustivel será de R$${(consumo * preco).toFixed(2)}`);

    }

}




/* 

    Crie uma classe para representar pessoas.
    para cada pessoa teremos os atributos:
    - Nome.
    - Peso.
    - Altura.
    As pessoas devem ter a capacidade de dizer o seu IMC. Formula: IMC = peso / (altura * altura);
    Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer
    o valor do seu IMC.

*/

    class Pessoa{
        nome;
        peso;
        altura;

        constructor(nome, peso, altura) {
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;

        }

        calcularIMC(){
            let IMC = this.peso / (this.altura * this.altura);
            return IMC

        }

        classificarIMC(){
            const imc = this.calcularIMC();
            if( imc > 40){
                return (`Você está com obesidade grave! seu IMC: ${imc.toFixed(2)}`);
                
            }else if(imc > 30 && imc <= 40){
                return (`Você está obeso! seu IMC: ${imc.toFixed(2)}`);
                
            }else if(imc > 25 && imc <= 30){
                return (`Você está acima do peso! seu IMC: ${imc.toFixed(2)}`);
                
            }else if(imc > 18.5 && imc <= 25){
                return (`Você está peso normal! seu IMC: ${imc.toFixed(2)}`);
                
            }else if(imc < 18.5){
                return (`Você está abaixo do peso! seu IMC: ${imc.toFixed(2)}`);
        
            }
        }

    }

    const Jose = new Pessoa('José', 70, 1.75);

    console.log(Jose);

    console.log(Jose.calcularIMC());

    console.log(Jose.classificarIMC());