	
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

function reload() {
    browserSync.reload();
}
 
function style() {
    return (
        gulp
            .src("app/scss/styles.scss")
 
            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)
 
            // What is the destination for the compiled file?
            .pipe(gulp.dest("app/css"))
			.pipe(browserSync.stream())
    );
}

 
 function watch(){
	  browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
	gulp.watch('app/index.html', reload);
    gulp.watch('app/scss/styles.scss', style, reload);
}
    
// Don't forget to expose the task!
 exports.style = style;
exports.watch = watch;
 