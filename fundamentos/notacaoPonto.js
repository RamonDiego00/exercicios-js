console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'//ele sobre escreve o anterior
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome//por conta do ponto o nome receber um atributo
    this.exec= function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())