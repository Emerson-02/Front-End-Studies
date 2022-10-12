function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))


///////////////////////////////////////////////////
function getPrecinho(imposto = 0.17, moeda = "R$") {
    return `${this.nome} = ${moeda}${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const carrao = {
    nome: "ferrari",
    preco: 1000000,
    desconto: 0.20,
    getPrecinho
}

console.log(getPrecinho.call(carrao))
console.log(getPrecinho.apply(carrao))

console.log(getPrecinho.call(carrao, 0.50))
console.log(getPrecinho.apply(carrao, [0.32, '$']))


////////////////////////////////////////////////////





















