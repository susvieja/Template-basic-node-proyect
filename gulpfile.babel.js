const gulp = require("gulp")
const pug = require('gulp-pug')
const sass = require("gulp-sass")
const plumber = require("gulp-plumber")

gulp.task("pug", () => {
    return gulp
        .src("./src/pug/*.pug")
        .pipe(plumber())
        .pipe(pug({pretty: true,}),)
        .pipe(gulp.dest("./public/"))
})
gulp.task('scss',()=>{
    return gulp
        .src('./src/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: "compact"}))
        .pipe(gulp.dest('./public/css'))
})
gulp.task('default',()=>{
    gulp.watch('./src/pug/*.pug', gulp.series('pug'))
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
})