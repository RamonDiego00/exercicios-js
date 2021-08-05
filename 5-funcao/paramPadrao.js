//estrategia 1 para gerar valor padrão
function soma1(a, b ,c) {
    a=a || 1
    b=b || 1
    c=c || 1
    return a + b + c
}//bem usado ainda para parametro padrao de uma variavel


console.log(soma1())
console.log(soma1(3) )
console.log(soma1(1, 2, 3) )
console.log(soma1(0,0,0))

//estrategia 2,3 e 4 para gerar valor padrão
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c//esse é o mais seguro para uma soma,pois só vai aceitar numbers
    return a + b + c
}
console.log('mudou')
console.log(soma2(), soma2(3), soma2(1,2,3),soma2(0,0,0))

//esse ? fala que se a for undefined ele vai colocar 1, esse ? significa 'se'

// valor padrão do es2015
function soma3(a = 1,b = 1,c = 1) {
    return a + b + c
}

console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))

//esse ultimo é o mais adequado