const products = [
    {nome: 'Playstation 5', preco: 5000, fragil: true},
    {nome: 'Macbook', preco: 70000, fragil: true},
    {nome: 'copo de vidro', preco: 50 , fragil: true},
    {nome: 'copo de plástico', preco: 4, fragil: false},
    {nome: "blabla", preco: 501, fragil: false},
    {nome: 'blabla2', preco: 501, fragil: true}
]

const filtro = p => p.preco > 500

const frageis = p => p.fragil

const result = products.filter(filtro).filter(frageis)

console.log(result)