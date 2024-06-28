// faça um programa que peça ao usuário para digitar 10 valores e some-os
let valorFim = 0
for (let cont = 1; cont <= 10; cont++) {
    let somar = Number(prompt(`Digite o ${cont}º numero`))
    valorFim += somar
}
console.log(valorFim)