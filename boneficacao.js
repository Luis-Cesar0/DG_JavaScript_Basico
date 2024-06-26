alert("informe os dados a seguir")

// valores recebidos
let nome = prompt("Digite o seu nome")
let salario= Number(prompt("digite o valor do seu salario "))
let tempoEmpresa = Number(prompt("escolha a opeção que mais se encaixa com o seu tempo de comtribuição \n Escolha de 1 a 4 \n 1- menos de 1 ano \n 2- 2 a 5 anos \n 3- 5 a 10 anos \n 4- mais de 10 "))
let dependente = Number(prompt('Quantos dependentes abaixo dos 7 anos moram com você'))

// criando variaveis

let tempoValor
let dependenteValor
let va = 1000
let vt = 200

// tempo de contribuição

switch (tempoEmpresa) {
    case 1:
        tempoValor = 0
        break;
    case 2:
        tempoValor = salario * 10/100
        break;

    case 3:
        tempoValor = salario * 15/100
        break;
    case 4:
        tempoValor = salario * 20/100
        break;
    default:
        alert("Escolha uma opeção valida")
        break;
}

// valor por dependentes

if(dependente != NaN){
    dependenteValor = 500 * dependente
}else{
    alert('Utilize numeros para se referir a quantidade de dependentes')
}

// descontos no salario

let INSS = salario * 9/100
let FGTS = salario * 8/100

// caculor dos benefícios,descontos e valor total


let valorTotal = salario + (salario + tempoValor) + dependenteValor

// exibindo na tela

document.write(`
    <h1>Tabela com valores</h1> 
    <ul>
        <li>Nome: ${nome}</li>
        <li>Salario Base: ${salario}</li>
        <li>Bônus por tempo de serviço ${salario + tempoValor}</li>
        <li>Auxilio Creche: ${dependenteValor}</li>
        <li>Vale terasporte ${vt}</li>
        <li>Vale Alimentação: ${va}</li>
        <li>Desconto INSS: ${INSS}</li>
        <li>Desconto FGTS: ${FGTS}</li>
        <li>Desconto FGTS: ${valorTotal}</li>
    
    </ul>
`)
