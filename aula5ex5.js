// escreva um programa que leia 10 números e escreva o menor valor lido eo mairo valor lido

alert("Digie 10 valores")
let num = Number(prompt('1º valor'))
let min= num
let max= num
let qtdNumeros = 10

for (let conta = 2; conta <= qtdNumeros; conta++) {
    num = Number(prompt(`${conta}º valor`))
    if(num > max){ 
        max = num
    }else if(num < min){
        min = num
    }

   
      
}
console.log('max num: '+max,'min num: '+min)