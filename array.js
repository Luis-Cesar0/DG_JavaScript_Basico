let endereco = [5234126534,"Rua Alexandrina",100,'Guabiraba','Recife']

let tamanho= endereco.length

endereco[2] = 'Nº 100'
endereco[endereco.length] = 'Fortaleza'
endereco[endereco.length] = 'CE'

function leia(qtdnota = 3) {
    let notas = []
    let soma = 0
    for (let i = 1; i <= qtdnota; i++) {
        let digiteNota= Number(prompt(`Digite a ${i}º nota`))
        notas[i-1] = digiteNota  
        soma += digiteNota 
    }
    return soma/qtdnota  
}
//  let qtdNotas = Number(prompt("DIgite a quantidade de notas o auluno tem"))

// alert(leia(qtdNotas))

let arrayNota=[1,2,3]
//Adicionado no fina da lista
arrayNota[3] = "A"
arrayNota.push = 'B'

// Excluindo um espaço do array
let exluindo =  arrayNota.pop()

// adiciona ao inicio do array
arrayNota.unshift('inicio')
//remover do inicio
let removeIncio = arrayNota.shift


function filaGrande(qtdAtendido,fila){
    let atendidos = []
    for(let i= 1; i <= qtdAtendido;i++){
        atendidos.unshift(fila.shift())
    }
    let atendidosAmanha = fila
    console.log( 'Atendidos: ' + atendidos)
    console.log('Atendidos amanha: ' +atendidosAmanha)
    console.log(atendidosAmanha[0])
}
// let filaArray = ['João','Maria','Marcia','Carlos','Livia','Leo']
// filaGrande(3,filaArray)

let numeros = [1,2,3]

function aoQuadrado(num){
    return num**2
}
let numerosAoQuadrado = numeros.map((item) => aoQuadrado(item))

console.log(numerosAoQuadrado)