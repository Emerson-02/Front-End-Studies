/*Escreva uma função que receba um valor booleano ou numérico.Se o parâmetro fornecido for
booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false,
retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo,
se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo
acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Exemplos:
Exercícios - Curso Fundamentos de Programação 2
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"*/


/*function inverso(a) {
    let num = a * -1
    const tipo = typeof a
    if (a == true) {
        console.log(!a)
    } else if (a == false) {
        console.log(!a)
    }else if (a) {
        //let b = a * -1
        console.log(num)
    } else if (a == String) {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${String}`)
    }
}

inverso(true)
inverso(false)
inverso(25)
inverso(-25)
inverso("Olá")
inverso(Object)*/


function inverso2(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") {
        return !valor
    } else if (tipo == "number") {
        return -valor
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso2(true))
console.log(inverso2(false))
console.log(inverso2(25))
console.log(inverso2(-25))
console.log(inverso2("Olá"))
console.log(inverso2(Object))