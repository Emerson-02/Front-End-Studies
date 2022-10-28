let str = "86774824072"
let txt = ''

for(i in str){
    txt += str[i]
    if(txt.length == 3 || txt.length == 7){
       txt += '.'
    }
    if(txt.length == 11){
        txt += '-'
    }

}


console.log(txt)