/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
    e a escolha da condição de pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efeturar o calculo
    adequado.

    Código condição de pagamento:
    - A vista Débito, recebe 10% de desconto;
    - A vista no Dinheiro ou PIX, recebe 15% de desconto.
    - Em duas vezes, preço normal de etiqueta sem juros.
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/
    //Variáveis
    let formaPagamento = 5;
    let parcelas = 2;
    let precoEtiqueta = 100;
    let precoTotal;
    let desconto;

    //Pix ou dinheiro
    if(formaPagamento === 1 || formaPagamento === 2){
        if(formaPagamento === 1){
            console.log(`Forma de pagamento PIX!`);
        }else{
            console.log(`Forma de pagamento dinheiro!`);
        }
        
        desconto = 0.15;
        console.log(`Desconto de R$: ${precoEtiqueta * desconto}`)
        precoEtiqueta = precoEtiqueta - precoEtiqueta * desconto;
        console.log(`Preço total a ser pago: R$ ${precoEtiqueta}, em ${parcelas} parcelas de ${(precoEtiqueta/parcelas).toFixed(2)}`);  

    }else if(formaPagamento === 3){
        console.log(`Forma de pagamento debito!`);

        desconto = 0.10;
        console.log(`Desconto de R$: ${precoEtiqueta * desconto}`)
        precoEtiqueta = precoEtiqueta - precoEtiqueta * desconto;
        console.log(`Preço total a ser pago: R$ ${precoEtiqueta}, em ${parcelas} parcelas de ${(precoEtiqueta/parcelas).toFixed(2)}`);

    }else if(formaPagamento === 4){
        console.log(`Forma de pagamento normal duas parcelas!`);
            
            precoEtiqueta;
            console.log(`Desconto de R$: ${precoEtiqueta }`)
            console.log(`Preço total a ser pago: R$ ${precoEtiqueta}, em ${parcelas} parcelas de ${(precoEtiqueta/parcelas).toFixed(2)}`);

    }else if(formaPagamento === 5){
        console.log(`Forma de pagamento em mais de duas parcelas!`);
        
        let juros = 0.1
        precoEtiqueta += precoEtiqueta * juros;
        console.log(`Desconto de R$: ${precoEtiqueta }`)
        console.log(`Preço total a ser pago: R$ ${precoEtiqueta}, em ${parcelas} parcelas de ${(precoEtiqueta/parcelas).toFixed(2)}`);
        console.log(`Com juros de ${juros}`);

    }else {
        console.log(`Forma de pagamento errada selecionada!`);
    }
