//Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%
alert("Cadastre os produtos")

let addProduto = 'sim'
let descontoProduto
let precoDesconto

while(addProduto.toLocaleLowerCase() != "não"){
    let nomeProduto = prompt('Digite o nome do produto')
    let precoProduto= Number(prompt(`Digite o valor do ${nomeProduto}`))
    let corProduto= prompt("Escolha uma das cores: \n Verde \n Amarelo \n Azul \n Vermelho")
    

    switch (corProduto.toLocaleLowerCase()) {
        case 'verde':
            descontoProduto =  precoProduto*10/100
            precoDesconto = precoProduto - descontoProduto
            break;
        case 'amarelo':
            descontoProduto =  precoProduto*20/100
            precoDesconto = precoProduto - descontoProduto
            break;
        case 'azul':
            descontoProduto =  precoProduto*30/100
            precoDesconto = precoProduto - descontoProduto
            break;
        case 'vermelho':
            descontoProduto =  precoProduto*40/100
            precoDesconto = precoProduto - descontoProduto
            break;
    
        default:
            alert('Digite uma cor valida entre  \n Verde \n Amarelo \n Azul \n Vermelho')
            break;
    }
    addProduto= prompt('Você quer cadastra outro produto sim ou não')
    document.write(`
        <h3> Produto ${nomeProduto}</h3>
        <ul>
            <li>Preço produto: R$${precoProduto}</li>
            <li>tipo de desconto: ${corProduto}</li>
            <li>desconto: R$${descontoProduto}</li>
            <li>Valor final: R$${precoDesconto}</li>

        </ul>
    `)
}