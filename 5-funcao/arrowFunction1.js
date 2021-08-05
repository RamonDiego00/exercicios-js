let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a//return implícito
console.log(dobro(Math.PI))

//pode tirar os pareteses se tiver só um parametro

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'// possui um param
console.log(ola())
