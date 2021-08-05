// ES*: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}//já é a chave e o valor já vem dentro e eu posso criar função só com o ()

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())

//o class recebeu u objeto,ai eu fiz ele herdar ai eu coloquei elementos nele para poder ser chamado usando a notção ponto