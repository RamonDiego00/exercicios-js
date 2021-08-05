Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}//o this se refere ao tipo tratado

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0,3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }

    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(-5)