const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

///////////////////////////////
console.log("////////////////////////////////")

const numeros = [0, 3, 5, 7, 9, 11]

let results = numeros.map(function(a) {
    return a * 15
})

console.log(results)

const soma5 = a => a + 5
const triple = a => a * 3
const paraMoney = a => `Eu tenho R$ ${parseFloat(a).toFixed(2).replace(".", ",")}`

results = numeros.map(soma5).map(triple).map(paraMoney)
console.log(results)