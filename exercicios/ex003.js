/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas
por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser
a string "Salário igual a R$X", em que X é o quanto o funcionário ganhou no mês.

Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"*/

/*function ganhouMoMes(horasTrabalhadas, recebePorHora) {
    let a = horasTrabalhadas * recebePorHora
    //console.log(`Salário igual a R$${a} por mês`)
    return `Salário igual a R$${a} por mês`
} 

//ganhouMoMes(150, 10)
console.log(ganhouMoMes(150, 10))*/

function ganhouMoMes(horasTrabalhadas, recebePorHora) {
    let a = horasTrabalhadas * recebePorHora
    let imposto = a * (1 - 0.30)
    console.log(`Salário menos imposto é igual a R$${a} por mês`)
   // return `Salário menos imposto é igual a R$${imposto} por mês`
} 

ganhouMoMes(150, 40.5)
//console.log(ganhouMoMes(150, 10))