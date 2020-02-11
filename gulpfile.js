const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

/**
 * Sassをコンパイルするタスク
 */
const compileSass = () =>
    src("./template/css/style.scss")
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("./template/css"));
const watchSassFiles = () => watch("./template/css/style.scss", compileSass);

exports.default = watchSassFiles;