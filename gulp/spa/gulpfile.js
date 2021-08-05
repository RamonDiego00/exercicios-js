const {series, parallel} = require('gulp')
const gulp = require('gulp')

const  {appHTML,appCSS,appJS,appIMG} = require('./gulpTasks/app')
const  {depsCSS,depsFonts } = require('./gulpTasks/deps')
const  {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)

//organizado de forma serial, com o objetivo de os arquivos que tem dependencias rode de forma tranquila, e os paralelos não tem dependencia  