function triangulos (a, b, c) {
    if (a == b && b == c) {
        console.log('Equilátero')
    } else if (a == b || b == c || a == c) {
        console.log('Isóceles')
    } else {
        console.log('Escaleno')
    }
}

triangulos(3, 3, 3)
triangulos(3, 3, 2)
triangulos(3, 2, 1)

// DONE