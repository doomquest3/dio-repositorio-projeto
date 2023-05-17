/* Aula sobre objetos */
    
const individuo ={
    nome:'Josefina das graças fonseca trindade',
    idade: 23,
    descreve: function descrever(){
        //this -> Contexto onde é executado, ou seja, o this assume o objeto onde está inserido.
        console.log(`meu nome é ${this.nome} minha idade é ${this.idade}!`);
    }
};

/* Aula sobre classes */

//Classe pessoa
class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;

    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }

}

const joaozinho = new Pessoa('joazinho silva', 34);

const mariazinha = new Pessoa('mariazinha cunha', 38);


//Função para comparar idades
function compararIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha(o) que ${p2.nome}.`);

    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha(o) que ${p1.nome}.`);

    }else if(p1.idade === p2.idade){
        console.log(`${p1.nome} é tem a mesma idade que ${p2.nome}.`);

    }
}

compararIdade(joaozinho,mariazinha);