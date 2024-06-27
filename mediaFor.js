alert('Digite as notas')
let estiloMedia= Number(prompt('Escolha a forma de cacular a mdeia \n 1- media aritmética \n 2- media ponderada'))

switch (estiloMedia) {
    case 1:
        let notaFinalAr = 0
        for (let qtdNotaAr = 1; qtdNotaAr <= 4; qtdNotaAr++) {
            notaAr= Number(prompt(`Digite a nota numero ${qtdNotaAr}`))
            notaFinalAr+= notaAr 
        }
        let mediaAr = notaFinalAr/(qtdNotaAr-1)
        console.log(`Media final= ${mediaAr}`)

        break;
    case 2:
        let notaPd 
        let pesos

        for (let qtdNotaPd = 1; qtdNotaPd <= 4; qtdNotaPd++) {
            if (qtdNotaPd%2 == 0) {
                notaPd+= (Number(prompt("Digite a sua nota")) * 2)
                pesos+= 2
            }else if(qtdNotaPd == 3){0

                notaPd+= (Number(prompt("Digite a sua nota")) * 3)
                pesos+= 3

            }else{
                notaPd+= Number(prompt("Digite a sua nota"))
                pesos+= 1
            }
        }
        let mediaPd = notaPd/pesos
        console.log(`Media final= ${mediaPd.toFixed(2)}`)


        break;

    default:
        break;
}