let numero = 1
{
    let numero = 2
    console.log('dentro=',numero)//caso não tenha a variavel numero dentro ele pega a externa tbm
}
console.log('fora=',numero)
//isso nos mostra que o let tem escopo com blocos,o contrario do var