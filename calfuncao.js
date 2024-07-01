// alert("digite dois numero e escolha a operção")

// let userNum1= Number(prompt("Digite o primero numero"))
// let  userNum2= Number(prompt("Digite o segundo numero"))

// let userOpera= Number(prompt('escolha a operação \n 1- adição \n 2- subtração \n 3- multiplicação \n 4- divisão'))

// function calc(num1,num2,opera){switch (opera) {
//     case 1:
//         console.log(num1 + num2)
//         break;
//     case 2:
//         console.log(num1 - num2)
//         break;
//     case 3:
//         console.log(num1 * num2)
//         break;
//     case 4:
//         if(num2 != 0){
//         console.log(num1 / num2)
//         }else{
//             console.log("Não é possivel divosão por 0")
//         }
//         break;

//     default:
//         console.log("digite um valor valido")
//         break;
// }}

// calc(userNum1,userNum2,userOpera)


alert("digite dois numero e escolha a operção")

let userNum1= Number(prompt("Digite o primero numero"))
let  userNum2= Number(prompt("Digite o segundo numero"))
let userOpera= eval(prompt('escolha a operação \n 1- soma \n 2- sube \n 3- mult \n 4- divi'))



function soma(num1,num2){     
    return(num1 + num2)
}
function sube(num1,num2){ 
    return(num1 - num2)

}
function  mult(num1,num2){ 
    return(num1 * num2)
}
function divi(num1,num2){ 
    if(num2 != 0){
        return(num1 / num2)
        }else{
            return("Não é possivel divosão por 0")
        }
}
function exibir(usNum1,usNum2, func){
    alert(func(usNum1,usNum2))
}
exibir(userNum1,userNum2,userOpera)

 

 