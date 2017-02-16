var less = require('less');
var chalk = require('chalk');
var timestamp = require('./lib/timestamp');
var global = require('global');
var fs = require('fs');

// Default options
var options = {
    compress: true
};

// LESS
module.exports = function(file) {
    // Options
    if (typeof global.options !== 'undefined' &&
        typeof global.options.less !== 'undefined'
    ) {
        options = global.options.less;
    }

    var folder = file.split('/').slice(0, -1).join('/'),
        source,
        css;

    // Assign folder
    if (typeof options.paths !== 'undefined' && options.paths) {
        options.paths = folder;
    }

    // Assign source
    if (file) {
        source = fs.readFileSync(file).toString();
    } else {
        source = this.toString();
    }

    // Run LESS
    less.render(
        source,
        options,
        function (err, output) {
            if (err) {
                console.log(timestamp(), chalk.yellow.bold('-------------- ERROR --------------'));
                console.log(timestamp(), chalk.red(err.message));
                css = '';
            } else {
                css = output.css;
            }
        }
    );

    return css;
};
