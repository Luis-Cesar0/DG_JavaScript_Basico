// function dizeroi() {
//     console.log("oi")
// }


// function calcularMedia(n1, n2 , n3){
//     let media = (n1 + n2 + n3 )/3
//     console.log(media)
// }
// calcularMedia(10,10,10)


function nomePessoa(nome, idade) {
    console.log('Nome: '+nome,'Idade: '+idade)
    return `Olá ${nome},tudo bem`
    
}
let ola= nomePessoa("Luis",21)

console.log(ola)

function somaRepete( num1, num2){
    let soma = 0
    
    for(let i =num1; i <= num2; i++){
        soma += i
    }
    return soma
}
let numero1 = Number(prompt("Digite o numero de incio"))
let numero2 = Number(prompt("Digite o numero de fim"))

alert(somaRepete(numero1,numero2))