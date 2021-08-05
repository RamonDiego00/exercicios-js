const soma = function(x,y) {
    return x + y
}

const imprimirResultado = function (a,b,operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function (x,y){
    return x - y
})
imprimirResultado(3,4,(x,y) => x*y) //Arrow function


const pessoa = {
    falar:function() {
    console.log('Opa')
    }

}

pessoa.falar()

// Passar uma função anonima em uma chamada de função é bem normal 

//como o operacao é igual o soma o a e o b viraram o x e o y,por isso a soma deu certo pois o a e o b viraram parametros de operacao vulgo soma