var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var ghPages = require('gulp-gh-pages');
var del = require('del');
var rename = require('gulp-rename');

var paths = {
  file: 'doc/zh.md',
  dest: 'output'
};

gulp.task('md', function() {
  return gulp.src(paths.file)
    .pipe(rename('index.md'))
    .pipe(pandoc({
      // bug https://github.com/jgm/pandoc/issues/1841
      from: 'markdown-markdown_in_html_blocks',
      to: 'html',
      ext: '.html',
      args: [
        '--standalone',
        '--template=tpl.html',
        '--include-after-body=doc/footer.html'
      ]
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});

gulp.task('css', function() {
  return gulp.src('css/*')
    .pipe(gulp.dest(paths.dest + '/css'));
});

gulp.task('watch', function() {
  gulp.watch('css/*', ['css']);
  gulp.watch(paths.file, ['md']);
});

gulp.task('deploy', function() {
  return gulp.src(paths.dest + '/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['css', 'md']);
