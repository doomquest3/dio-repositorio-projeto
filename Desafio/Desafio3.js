/*Praticando com funções */

// Função para calcular desconto.

function calcularDesconto(precoEtiqueta, desconto){
    return precoEtiqueta = precoEtiqueta - precoEtiqueta * (desconto/100);

}

// Função para calcular juros.
function calcularJuros(precoEtiqueta,juros){
    return precoEtiqueta += precoEtiqueta * (juros/100);

}


//Função para calcular preco de compra
function calcularCompra(precoEtiqueta, formaPagamento, parcelas){
    //Forma de pagamento - debito
    if(formaPagamento === 1){
        let desconto = 10;
        console.log(`Preço a ser pago em debito: R$ ${calcularDesconto(precoEtiqueta, desconto)}`);
        console.log(`Preço descontado R$${precoEtiqueta * desconto}`);
        console.log(`com desconto de ${desconto}%`);

    //Forma de pagamento - PIX ou dinheiro.
    }else if(formaPagamento === 2 || formaPagamento === 3){
        let desconto = 15;
        console.log(`Preço a ser pago em debito: R$ ${calcularDesconto(precoEtiqueta, desconto)}`);
        console.log(`Preço descontado R$${precoEtiqueta * desconto}`);
        console.log(`com desconto de ${desconto}%`);
        
    //Forma de pagamento - normal em duas parcelas.    
    }else if(formaPagamento === 4){
        console.log(`Preço a ser pago normal: R$ ${calcularDesconto(precoEtiqueta)}`);
        console.log(`em ${parcelas} parcelas de R$${precoEtiqueta/parcelas}`);

    //Forma de pagamento: normal com mais de duas parcelas.
    }else if(formaPagamento === 5){
        let precoJuros = calcularJuros(precoEtiqueta, 10);
        console.log(`Preço a ser pago: R$ ${precoJuros}`);
        console.log(`em ${parcelas} parcelas de R$${(precoJuros/parcelas).toFixed(2)}`);

    //Forma de pagamento inválida.
    }else{
        console.log(`Forma de pagamento inválida!`);

    }
    
}

calcularCompra(100,5,3);
