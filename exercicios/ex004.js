/*Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como
uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro",
pois este é o 2° mês.

Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"*/
    

function mesCorrespondente(numero) {
    if (numero == 1) {
        console.log('Janeiro')
    } else if(numero == 2) {
        console.log('Fevereiro')
    } else if(numero == 3) {
        console.log('Março') 
    } else if(numero == 4) {
        console.log('Abril')
    } else if(numero == 5) {
        console.log('Maio')
    } else if(numero == 6) {
        console.log('Junho')
    } else if(numero == 7) {
        console.log('Julho')
    } else if(numero == 8) {
        console.log('Agosto')
    } else if(numero == 9) {
        console.log('Setembro')
    } else if(numero == 10) {
        console.log('Outubro')
    } else if(numero == 11) {
        console.log('Novembro')
    } else if(numero == 12) {
        console.log('Dezembro')
    } else {
        console.log('Não existe')
    }
}

mesCorrespondente(1)
mesCorrespondente(2)
mesCorrespondente(3)
mesCorrespondente(4)
mesCorrespondente(5)
mesCorrespondente(6)
mesCorrespondente(7)
mesCorrespondente(8)
mesCorrespondente(9)
mesCorrespondente(10)
mesCorrespondente(11)
mesCorrespondente(12)
mesCorrespondente(13)

console.log('/////////////////////')

function receberNomeDoMes(numero) {
    switch(numero){
    case 1:
        return "janeiro";
    case 2:
        return "fevereiro";
    case 3:
        return "março";
    case 4:
        return "abril";
    case 5:
        return "maio";
    case 6:
        return "junho";
    case 7:
        return "julho";
    case 8:
        return "agosto";
    case 9:
        return "setembro";
    case 10:
        return "outubro";
    case 11:
        return "novembro";
    case 12:
        return "dezembro";
    default:
        return "Não existe"
    }
}

console.log(receberNomeDoMes(1))
console.log(receberNomeDoMes(2))
console.log(receberNomeDoMes(3))
console.log(receberNomeDoMes(4))
console.log(receberNomeDoMes(5))
console.log(receberNomeDoMes(6))
console.log(receberNomeDoMes(7))
console.log(receberNomeDoMes(8))
console.log(receberNomeDoMes(9))
console.log(receberNomeDoMes(10))
console.log(receberNomeDoMes(11))
console.log(receberNomeDoMes(12))
console.log(receberNomeDoMes(13))

console.log('///////////////////////')

function receberNomeDoMes2(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
}

console.log(receberNomeDoMes2(1))
console.log(receberNomeDoMes2(2))
console.log(receberNomeDoMes2(3))
console.log(receberNomeDoMes2(4))
console.log(receberNomeDoMes2(5))
console.log(receberNomeDoMes2(6))
console.log(receberNomeDoMes2(7))
console.log(receberNomeDoMes2(8))
console.log(receberNomeDoMes2(9))
console.log(receberNomeDoMes2(10))
console.log(receberNomeDoMes2(11))
console.log(receberNomeDoMes2(12))
console.log(receberNomeDoMes2(13))