alert("compare dois numero com um terceiro numero")
let num1 = Number(prompt("digite o numero 1"))
let num2 = Number(prompt("digite o numero 2"))
let num3 = Number(prompt("digite o numero 3"))

if ( num1 + num2 > num3) {
    console.log('a soma de 1 e 2 é maior que 3')
}else if(num1 + num2 < num3){
    console.log('a soma de 1 e 2 é menor que 3')
}else{
    console.log('é igual')
}