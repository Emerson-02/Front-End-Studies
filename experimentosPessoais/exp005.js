const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        } 
    },
    status() {
        return `${this.modelo}: ${this.velAtual}km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 340,
    status() {
        return `${super.status()}`
    }
}

const volvo = {
    modelo: "V40",
    velMax: 250
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status())
ferrari.acelerar(20)
console.log(ferrari.status())
ferrari.acelerar(15)
console.log(ferrari.status())
ferrari.acelerar(400)
console.log(ferrari.status())

console.log(volvo.status())
volvo.acelerar(125)
console.log(volvo.status())