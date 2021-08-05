const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false,//não vai ter comentários
        presets: ["env"]//versão mais moderna
    }))
    .pipe(uglify())//Vai tirar os espaços e é se parametro
    .on('error', err => console.log(err))//pra caso de erro
    .pipe (concat('codigo.min.js'))//arquivo que vai ser gerado ao final da junção
    .pipe(gulp.dest('build'))// pasta que vai receber o arquivo

    return cb()
}

    function fim(cb) {
        console.log('Fim!!!')
        return cb()
    }

module.exports.default = parallel(transformacaoJS, fim)