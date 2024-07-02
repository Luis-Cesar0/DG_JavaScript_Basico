// objeto teste
// let enderecoArray=['Rua','Bairro','Cidade','Estado','CEP']

// for( let i = 0; i < enderecoArray.length; i++){
//     let elemeto = enderecoArray[i]
// }
// for( let chav in enderecoArray){
//     let elemeto = chav
// }

// let enderco = {
//     rua: 'Rua',
//     bairro: 'Bairro',
//     cidade: 'Cidade',
//     1: 'Coisa'
// }

// //crie um objeto chmado pessoa com as propriedades nome , idade altura e peso

// let pessoa = { 
//     nome: 'Luis',
//     idade: 21,
//     altura:1.80,
//     peso: 79,
//     IMC: (peso,altura)=>{
//         let imc = peso/(altura**2)
//         return imc
//     }
// }

// console.log(`Olá sou ${pessoa.nome},tenho ${pessoa.idade}, altura de ${pessoa.altura} e peso ${pessoa.peso}`)
// pessoa.corOlhos = 'castanho'

// console.log(pessoa)
// delete pessoa.corOlhos
// console.log(pessoa)

// let imcpesoa= pessoa.IMC(pessoa.peso,pessoa.altura)
// console.log(imcpesoa)


// // crie um array com 5 produtos
// // Cada prduto deve ser um objeto com as propriedades nome,cor,preço,tamanho e disponibilidade.
// // cire um método calcularDesconto que recebe um número e retorna o preço com desconto.
// // crie um método alterar disponibilidade. Se a disponibilidade estiver tue, altera para false e vice-versa.

// let produtos = []


// // ciradno produtos
// for (let i = 0; i < 5; i++) {
//     let produto={
//         nome: prompt(`Digite o nome do produto nº ${i}`),
//         cor: prompt('Digite a cor do produto'),
//         preco: Number(prompt('preço do produto')),
//         tamanho: Number(prompt('tamanho do produto')),
//         dispo: confirm('Produto disponivel'),
//         calcDesconto: (descont = 0)=>{
//             return produto.preco* (1-descont/100)
//         },
//         disponibilidade: ()=>{
//             if(dispo){
//                 dispo = false
//             }else{
//                 dispo = true
//             }
//         }
        
//     }
//     produtos.push= produto   
// }

function confirmaValor(verificaValor,local){
    let verifica= Number(prompt(`Digite ${local}`))

    if (verifica == verificaValor) {
        return true
    }else{
        return false
    }
}


let conta = {
    senha: prompt('Informe a sua senha'),
    agencia: Number(prompt('Informe a sua agência')),
    nConta: Number(prompt('Informe o numero da agencia')),
    titular: prompt('Nome do titular da conta'),
    tipoPjPf: prompt('Infrome o tipo Pj/Pf'),
    saldo: Number(prompt('Saldo na conta')),
    emprestimo: [],
    sacar: (valor)=>{
        
        if(confirmaValor(conta.senha,'senha')){
            if (conta.saldo >=valor) {
                return conta.saldo -= valor
            } else {
                alert('saldo insuficnete') 
            }
        }else{  
            alert('senha incorreta')
        }
    },
    Depositar: (valor)=>{
        
        if(confirmaValor(conta.nConta,'Numero da conta')){
          return valor+= conta.valor

        }else{  
            alert('senha incorreta')
        }
    },
    fazerEmrepstimo: (valor)=>{
            if(confirmaValor(conta.senha,'senha')){
                let qtdParcelas = 24
                let juros = 0.02
                let parcelas = (valor/qtdParcelas)*(1+ juros)
                conta.saldo+=valor
                let infomaacoesEmprestimo = [valor,qtdParcelas,parcelas,juros]
                conta.emprestimo.push(infomaacoesEmprestimo)
                console.log(`Empréstimo de R$ ${valor} concedido Saldo atual da conta é ${conta.saldo}`)

            }else{
                console.log('Senha está errada')
            }
    },
    consutarSaldo: ()=>{
            if(confirmaValor(conta.senha,'senha')){
                console.log(conta.saldo)

            }else{
                console.log('Senha está errada')
            }
    }

}