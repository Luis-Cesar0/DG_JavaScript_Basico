alert("Digite as três notas")

let nota1 = Number(prompt("Digite a primera nota"))
let nota2 = Number(prompt("Digite a segunda nota"))
let nota3 = Number(prompt("Digite a terceira nota"))

let media = (nota1 + nota2 + nota3) / 3

alert("A media é " + media.toFixed(1))