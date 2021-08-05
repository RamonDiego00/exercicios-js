class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'Professor') {
        super(sobrenome)//chamando o constructor do pai 
        this.profissao = profissao
    }
        
}
//o this nessa ocasioao faz com que o objeto que for criado com base nesse class vai criar um atributo igual com o mesmo valor(this.algo = algo)(chave = valor)

class Filho extends Pai {
    constructor() {
        super('Silva')// o super tbm pode sobre escrever o valor anterior que eu defini co super
    }
}

const filho = new Filho
console.log(filho)