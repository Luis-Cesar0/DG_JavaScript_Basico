alert("calcule o seu IMC")

let peso = Number(prompt("Digite o seu peso"))
let altura = Number(prompt("Digite o sua alatura"))

let imc = peso/altura**2

if(imc >= 18.5 && imc < 25){
    alert('Peso normal')
}else if(imc >= 25 && imc < 25){
    alert('acima do peso')
}else if(imc > 30){
    alert('Obeso')
}else{
    alert('Magresa')
}