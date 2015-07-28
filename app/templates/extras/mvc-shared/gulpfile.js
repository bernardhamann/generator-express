var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  env = require('gulp-env'),
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
    script: 'app.js',
    ext: 'js coffee <%= options.viewEngine %>',
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
