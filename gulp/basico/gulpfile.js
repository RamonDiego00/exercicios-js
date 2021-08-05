const gulp = require ('gulp')
const {series, parallel} = require ('gulp')                              //ou// const {series} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}
const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    //  gulp.src('pastaA/**/*.txt') Qualquer arquivo na pasta A que tem a extenção txt será copiado
    // .pipe(imagemPelaMetade())
    // .pipe(imagemEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    .pipe(gulp.dest('pastaB'))
      //O pipe permite eu transformar arquivos de entrada(arquivo 1 e 2)
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}

module.exports.default = series(
   parallel( antes1,antes2),
    copiar,
    fim,
)