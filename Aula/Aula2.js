
/*

    Quando uma condicional é complexa é recomendado criar uma variavel
    para deixar mais legivel e entendivel para o programador.

*/

const numero = 10;

const isNumeroPar = (numero % 5) === 0;

if(numero === 0){
    console.log("O número inserido é inválido! O número é:", numero);
}else{
    if(eNumeroPar){
        console.log('O número:', numero+' é par!');
    }else{
        console.log('O número:',numero+' não é par! ');
    }
    
}