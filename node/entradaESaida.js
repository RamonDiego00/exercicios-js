const anonimo = process.argv.indexOf('-a') !== -1
//teste para ver se a flagy -a tá disponivel
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')//é tipo um console.log porem tem que ter a flagy(saida padrão)
    process.exit()//finaliza o processo
} else {
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data', data => {//.on é um efeito input quando se aperta enter que pega os dados
        const nome = data.toString().replace('\n','')//remover o \n do final

        process.stdout.write(` Fala ${nome} \n`)
        process.exit()
    })
}