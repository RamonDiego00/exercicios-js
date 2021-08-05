var numero = 1
{
    var numero = 2
    console.log('dentro=',numero)
}
console.log('fora =',numero)

//O bloco não tem escopo,logo, o numero dois é impressoduas vezes.A não ser que seja uma funçao ou uma variável do tipo let