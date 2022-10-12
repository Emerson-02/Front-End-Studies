function multiplicador(numero, quantidade) {
    let resultado = []

    for(let i = 0; i < quantidade; i++)
    resultado.push(numero)

    let soma = 0

    for(let i in resultado) {
        soma += resultado[i]
    }
    
    return soma
    
}
console.log(multiplicador(5, 3))
console.log(multiplicador(7, 10))
console.log(multiplicador(50, 2))
console.log(multiplicador(4, 4))
console.log(multiplicador(9, 9))