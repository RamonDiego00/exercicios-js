function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa

//O self é uma constante que armazena o this onde eu posso evitar usar o bind(),pois o objeto ja vai ser chamado