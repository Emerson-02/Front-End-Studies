function dividendoDivisor (a, b) {
    const divisao = a / b
    const divisaoInteira = Math.floor(divisao)
    const resto = a % b
    console.log(divisao)
    console.log(divisaoInteira)
    console.log(resto)
}

dividendoDivisor(7, 2)