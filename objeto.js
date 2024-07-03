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

// function confirmaValor(verificaValor,local){
//     let verifica= Number(prompt(`Digite ${local}`))

//     if (verifica == verificaValor) {
//         return true
//     }else{
//         return false
//     }
// }


// let conta = {
//     senha: prompt('Informe a sua senha'),
//     agencia: Number(prompt('Informe a sua agência')),
//     nConta: Number(prompt('Informe o numero da agencia')),
//     titular: prompt('Nome do titular da conta'),
//     tipoPjPf: prompt('Infrome o tipo Pj/Pf'),
//     saldo: Number(prompt('Saldo na conta')),
//     emprestimo: [],
//     sacar: (valor)=>{
        
//         if(confirmaValor(conta.senha,'senha')){
//             if (conta.saldo >=valor) {
//                 return conta.saldo -= valor
//             } else {
//                 alert('saldo insuficnete') 
//             }
//         }else{  
//             alert('senha incorreta')
//         }
//     },
//     Depositar: (valor)=>{
        
//         if(confirmaValor(conta.nConta,'Numero da conta')){
//           return valor+= conta.valor

//         }else{  
//             alert('senha incorreta')
//         }
//     },
//     fazerEmrepstimo: (valor)=>{
//             if(confirmaValor(conta.senha,'senha')){
//                 let qtdParcelas = 24
//                 let juros = 0.02
//                 let parcelas = (valor/qtdParcelas)*(1+ juros)
//                 conta.saldo+=valor
//                 let infomaacoesEmprestimo = [valor,qtdParcelas,parcelas,juros]
//                 conta.emprestimo.push(infomaacoesEmprestimo)
//                 console.log(`Empréstimo de R$ ${valor} concedido Saldo atual da conta é ${conta.saldo}`)

//             }else{
//                 console.log('Senha está errada')
//             }
//     },
//     consutarSaldo: ()=>{
//             if(confirmaValor(conta.senha,'senha')){
//                 console.log(conta.saldo)

//             }else{
//                 console.log('Senha está errada')
//             }
//     }

// }

//filter
let numero = [1,2,3,4,5,6,7,8,9,10]
let par = numero.filter((x)=>{
    
})

//construir um array de 4 objetos. Cada objeto terá as seguintes chaves:nome,nota. Sendo a nota entre 0 a 10

let alunos = [
    {
        nome: 'Ana',
        nota: 8
    },
    {
        nome: 'Paulo',
        nota: 10
    },
    {
        nome:'Maria',
        nota: 5
    },
    {
        nome:'Jose',
        nota: 7
    },
]
// montar um array de obejetos,contendo apenas nos aporvados (nota meior que 7)

// let aprovados = alunos.filter((x)=>{
//     if (x.nota >=7) {
//         return x
//     }
// })
// console.log(aprovados)
// let nomeAprovados = aprovados.map((nome) => nome.nome)
// console.log(nomeAprovados)
// let somaNumeros= numero.reduce((soma,num)=> soma += num)
// console.log(somaNumeros)

// let notaaprovados = aprovados.map((nota)=> nota.nota)
// let notaTotalAprovados = notaaprovados.reduce((soma,nota)=> soma += nota )
// console.log(notaTotalAprovados)

let pessoas = [
    {
        nome: 'Luis',
        carga:'Dev web',
        salario: 4500,
        gratificacao: 750,
        idade: 22,
    },
    {
        nome:'Mario',
        carga: 'Adm',
        salario: 3400,
        gratificacao:360 ,
        idade:25,
    },
    {
        nome: 'Maria',
        carga: 'atendente',
        salario: 2500,
        gratificacao: 270,
        idade: 30,
    },
    {
        nome: 'Livia',
        carga: 'advogada',
        salario: 10468,
        gratificacao: 1200,
        idade: 46,
    },
    {
        nome: 'Leadro',
        carga: 'Direto executivo',
        salario: 15679,
        gratificacao: 3500,
        idade: 56,
    },
]



 pessoas.forEach((item) => console.log(`${item.nome} recebe ${item.gratificacao + item.salario} de salario e bonificação`))

let gratificacaoValores =  pessoas.map((pessoa)=> pessoa.gratificacao)
console.log(gratificacaoValores)


let gratificacaoDobrada = gratificacaoValores.map((item)=> item*2)

console.log(gratificacaoDobrada)

let salariosMais4k = pessoas.filter((item)=>{
    if(item.salario>4000){
        return item
    }
})
console.log(salariosMais4k)

let maior20anos = pessoas.filter((pessoa)=>{
    if(pessoa.idade > 20){
        return pessoa
    }
})
console.log(maior20anos)

let totalGratificacao = pessoas.reduce((total, funcionario)=>{
    return total += funcionario.gratificacao
})
console.log(totalGratificacao)

