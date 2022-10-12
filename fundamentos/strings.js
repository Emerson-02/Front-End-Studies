const escola = 'Cod3r'

console.log(escola.charAt(4)) //pegar determinado caractere dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // codigo Unicode
console.log(escola.indexOf('3')) // indice do caractere

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // concatenar
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) 
console.log('Ana,Maria,Pedro'.split(/,/))
console.log('Ana,Maria,Pedro'.split(/./))