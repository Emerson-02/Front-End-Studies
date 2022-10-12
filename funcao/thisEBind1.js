const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


















////////////////////////////////////


const vaca = {
    saudacao: "Muuuuuuuuuu",
    mugir() {
        console.log(this.saudacao)
    }
}

vaca.mugir()

const vacaMugir = vaca.mugir.bind(vaca)
vacaMugir()


/////////////////////////////////////












