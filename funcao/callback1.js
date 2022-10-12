const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/////////////////
// const marcas = ["Claro", "Tim", "Oi", "Vivo"]

// function mostrar(nome, indice) {
//     console.log(`${indice + 1}. ${nome}`)
// }

// marcas.forEach(mostrar)
// marcas.forEach(marcas => console.log(marcas))