function retmax (a, b, c) {
    console.log(Math.min(a, b, c))

}

retmax(5 ,1 , 10)

function retmin (a, b, c) {
    console.log(Math.max(a, b, c))

}

retmin(5 ,1 , 10)

function retrand ({a = 0, b = 100}) {
    let d = Math.random() * (b - a) + a
    return Math.floor(d)
}

console.log(retrand({}))

let now = new Date()
console.log(now)