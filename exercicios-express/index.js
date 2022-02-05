 const exprees = require('express')
 const app = exprees()

 app.use('/opa',(req, res, next)=> {
    console.log('Antes...')
    next()
})

 app.get('/opa',(req, res, next) => {
     console.log('Durante...')
    res.json({
       data: [ {id:7, name:'Ramon', position:1},
        {id:34, name:'Bia', position:2},
        {id:73, name:'Carlos', position:3}
       ],
       count:30,
       skip:0,
       limit:3,
       status:200
    })
    next()

    //  res.json({
    //     name: 'Cellphone',
    //     price: 1899.00,
    //     discount: 0.12
    //  })


    //  res.send('<h1>Testando</h1>')
 })

 
app.use('/opa',(req, res)=> {
    console.log('Depois...')
})

 app.listen(3000, ()=> {
     console.log("Backend Rodando...")
 })