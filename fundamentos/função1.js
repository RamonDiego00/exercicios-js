// Função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)//coloquei dois valores nas variaveis
imprimirSoma(2)
imprimirSoma(2,3,4,5,6,7,8)//só coloca os 2 primeiros

// Função com retorno
function soma (a,b = 1){
    return a + b // deixa mais prático
}//desse jeito eu posso definir um valor padrão
console.log(soma(2,3))//pude redefinir o padrão
console.log(soma(2))//ele usou o padrão   
