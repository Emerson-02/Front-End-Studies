/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false*/

function maiorOuIgual(a, b) {
    if (a >= b) {
        console.log(true)
    } else {
        console.log(false)
    }
}

maiorOuIgual(2, 1)
maiorOuIgual(2, 2)
maiorOuIgual(1, 2)

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

maiorOuIgual2(2, 1)
maiorOuIgual2(2, 2)
maiorOuIgual2(1, 2)
    