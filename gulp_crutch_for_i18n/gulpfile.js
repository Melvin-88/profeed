/**
 * Created by Tanya on 11.07.2017.
 */
var gulp = require('gulp');
var del = require('del');
var rename = require("gulp-rename");
var replace = require('gulp-replace');

var paths = {
  messages : '../src/client/**/messages.js',
  dest : 'messagesForParse'
};

function replacer(match, p1, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  console.log('>> p1 ', p1)
  return p1;
}

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([paths.dest], { force : true });
});

// Copy all needed files
gulp.task('messages', ['clean'], function() {
  return gulp.src(paths.messages)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('renamer', [], function () {
  var i = 0;
  return gulp.src("messagesForParse/**/messages.js")
    .pipe(rename(function (path) {
      i++;
      path.dirname = "";
      path.basename += "_" + i;
      path.extname = ".js"
    }))
    .pipe(gulp.dest("messagesRenamed"));
});

gulp.task('collect', [], function () {
  var fs = require('fs');
  fs.writeFile("test.js", "", function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
  return gulp.src("messagesRenamed/*.js")
  // See http://mdn.io/string.replace#Specifying_a_string_as_a_parameter

    .pipe(replace(/(id(\s)?:(\s)?'(.*)',(\s*)defaultMessage(\s)?:(\s)?'(.*)')/g, function(match, p1, p2, p3, offset, string) {
      // Replace foobaz with barbaz and log a ton of information
      // See http://mdn.io/string.replace#Specifying_a_function_as_a_parameter
      console.log(p1);
      fs.appendFile("test.js", p1, function(err) {
        if(err) {
          return console.log(err);
        }

        console.log(">>>");
      });
      return '<<<' + p1 + '>>>';
    })).
    pipe(replace(/(.*)<<</g, ''))
    .pipe(gulp.dest('messagesChecked'));
});

gulp.task('deleteIds', [], function() {
  return gulp.src("test.js").pipe(replace(/(,(\s)*defaultMessage(\s)?:)/g, ' :'))
    .pipe(gulp.dest('withoutIds'));
});

gulp.task('deleteDefaultMessages', [], function() {
  return gulp.src("test.js").pipe(replace(/(,(\s)*defaultMessage(\s)?:)/g, ' :'))
    .pipe(gulp.dest('withoutDefMessages'));
});

gulp.task('deleteIds', [], function() {
  return gulp.src('withoutDefMessages/test.js')
    .pipe(replace(/'id(\s)?:(\s)?/g, '\',\n'))
    .pipe(gulp.dest('withoutIds'));
})

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['messages', 'renamer']);