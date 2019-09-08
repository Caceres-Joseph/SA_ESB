const gulp = require('gulp');
const zip = require('gulp-zip');
const fileindex = require('gulp-fileindex');

gulp.task('fileindex', function() {
    return gulp.src('dist/*.zip')
        .pipe(fileindex())
        .pipe(gulp.dest('./dist'));
});

gulp.task('zipper', function() {
    return gulp.src('src/*')
        .pipe(zip('artefacto.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('zipper', 'fileindex'));
