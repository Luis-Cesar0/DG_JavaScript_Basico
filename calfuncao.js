alert("digite dois numero e escolha a operção")

let userNum1= Number(prompt("Digite o primero numero"))
let  userNum2= Number(prompt("Digite o segundo numero"))

let userOpera= Number(prompt('escolha a operação \n 1- adição \n 2- subtração \n 3- multiplicação \n 4- divisão'))

function calc(num1,num2,opera){switch (opera) {
    case 1:
        console.log(num1 + num2)
        break;
    case 2:
        console.log(num1 - num2)
        break;
    case 3:
        console.log(num1 * num2)
        break;
    case 4:
        if(num2 != 0){
        console.log(num1 / num2)
        }else{
            console.log("Não é possivel divosão por 0")
        }
        break;

    default:
        console.log("digite um valor valido")
        break;
}}

calc(userNum1,userNum2,userOpera)