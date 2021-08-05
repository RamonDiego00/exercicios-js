const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 ** 0',function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})//A cada 5 segundos em qualquer minuto as 23h e um domingo ele vai acionar a função

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
},20000) //para cancelar a ação em 20 segundos

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds)
})