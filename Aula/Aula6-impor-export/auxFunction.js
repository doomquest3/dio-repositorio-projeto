
    const conjEntrada = [9, 12, 100, 282, 5, 50, 10, 98, 23];
    let i = 0;
    function gets(){
        const valor = conjEntrada[i]
        i++;
        return valor;

    }

    function print(texto){
        console.log(texto);

    }

    //Definindo um objeto para exportar funções - no caso estamos exportando um objeto que contém a função get e print.
    module.exports = { gets, print};