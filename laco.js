let quantidadeVezes = 3 
let i = 1
let acumulador = 0

while (i <= quantidadeVezes) {
    console.log('São loguinho')
    console.log('Ganhou 100')
    acumulador += 100
    i++
}
console.log(acumulador)

let index = 0
let ate =10

while(index <= 10){
    console.log(index)
    index +=2
    
}

let fim = 100
let incio = 0
let par = 0


while( incio <= fim){
    if(incio%2 == 0 || incio%5 == 0){
        par += incio
    }
    incio += 1
}
alert(par)
