function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')





/*function numeroAleatorio(min, max) {
    const valeu = Math.random() * (max - min) + min
    return Math.floor(valeu)
}

console.log(`numero = ${numeroAleatorio(3, 10)}`)


let option = 0

while(option != -1) {
    option = numeroAleatorio(-1, 7)
    console.log(`voce escolheu: ${option}`)
}*/

















