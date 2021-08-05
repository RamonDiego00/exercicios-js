//Classe é ua função constutora

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome  = nome
        this.valor = nome
    }//param do class
}

class CicloFinanceiro {
    constructor(mes,ano) {
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
        
    }

    addLancamentos(...lancamentos) {
       lancamentos.forEach(l => this.lancamentos.push(l))
    }//concatenei os parametros que vão ser unidos no array e percorridos pelo forEach

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }


}

const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

