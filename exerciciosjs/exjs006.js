function capitalEJuros (capital, taxa, tempo) {
    const jurosSimples = capital + (1 + taxa * tempo)
    const jurosCompostos = capital * ((1 + taxa) ** tempo)
    console.log(jurosSimples)
    console.log(jurosCompostos.toFixed(2))
}

capitalEJuros(1400, 0.2, 7)

// não deu