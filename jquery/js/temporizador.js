(function() {
    $.fn.temporizador = function(opcoes) {
        const opcoesFinais = $.extend({
            mensagem:'Em breve!',
            horario: '23:59:59:00'    
        }, opcoes)

        const diaDezena = $('<span class="digito">').html('0')
        const diaUnidade = $('<span class="digito">').html('0')
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorDia = $('<span class="separador>').html(':')
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(diaDezena,diaUnidade,separadorDia,horaDezena,horaUnidade,separadorHora,minutoDezena,
            minutoUnidade,separadorMinuto,segundoDezena,segundoUnidade,
            mensagem)
        
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d):(\d\d)/)
        const  horarioAlvo = regex.exec(opcoesFinais.horario)
        console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setDate(horarioAlvo[1])
            alvo.setHours(horarioAlvo[2])
            alvo.setMinutes(horarioAlvo[3]) 
            alvo.setSeconds(horarioAlvo[4]) 

            const diferencialEmMili = alvo.getTime() - agora.getTime()
            if (diferencialEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencialEmMili).toISOString())
                // console.log(diferenca)

                
                diaDezena.html(diferenca[1] [0])
                diaUnidade.html(diferenca[1] [1])
                horaDezena.html(diferenca[2] [0])
                horaUnidade.html(diferenca[2] [1])
                minutoDezena.html (diferenca[3] [0])
                minutoUnidade.html (diferenca[3] [1])
                segundoDezena.html(diferenca [4] [0])
                segundoUnidade.html(diferenca [4] [1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
}) (jQuery)