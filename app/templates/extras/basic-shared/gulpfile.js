var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  env = require('gulp-env'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload')<% if(options.cssPreprocessor == 'stylus'){ %>,
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  jeet = require('jeet'),
  rupture = require('rupture')<% } %>;

<% if(options.cssPreprocessor == 'stylus'){ %>
gulp.task('stylus', function () {
  gulp.src('./public/css/*.styl')
    .pipe(plumber())
    .pipe(stylus({
        use: [
                nib(),
                jeet(),
                rupture()
        ]
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.styl', ['stylus']);
});<% } %>

gulp.task('set-env', function () {
env({
  vars: {
    PORT: 9002,
    MONGO_URL: answers.mongourl
    } 
  });
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js <%= options.viewEngine %> coffee',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [
  'set-env',
    <% if(options.cssPreprocessor == 'stylus'){ %>
  'stylus',<% } %>
  'develop'<% if(options.cssPreprocessor == 'stylus'){ %>,
  'watch'<% } %>
]);
