// faça um programa que determine e mostre os cinco primero múltiplos de 3 considerando números maores que 0
let limite = 1
for (let i = 1; i <= 100 ; i++) {
    if(i%3 == 0 && limite < 5){
        console.log(i)
        limite++
    } 
}