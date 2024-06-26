alert("bem vindo ao seu banco")
const nome= prompt("Digite o seu nome")
let saldo = 3000
const senha = 1234
let tentativa = 3
let incio = 1

 while(incio <= tentativa){
    let digSenha = Number(prompt("Digite a sua senha"))

    if(digSenha == senha){
        let opera =  Number(prompt('escolha a operação \n 1- Depositar \n 2- Saque \n 3- Extrato'))

        switch (opera) {
            case 1:
                let deposito = Number(prompt("Digite o valor a ser depositado"))
                saldo += deposito
                console.log(saldo)
                break;
            case 2:
                let saque = Number(prompt("Digite o valor a ser sacado"))
                if(saque > saldo){
                    alert('Valro insuficiente para saque')
                }else{
                    saldo -= saque
                    console.log(saldo)
                }
            break;
            case 3:
                console.log(saldo)
            break;
            default:
                alert("digite valor valido")
                break;
            }
                incio = tentativa + 1 
    }
    else{
        alert("senha invalida")
        if (incio== tentativa) {
            alert('você excedeu o limite de tentativas')
        }
        incio++
        
    }
    
}