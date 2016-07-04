'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var plug = require('gulp-load-plugins')();
var paths = require('../gulp.config.json');
var util = require('util');
var port = process.env.PORT || 7203;
var log = plug.util.log;

/**
 * Start the node server using nodemon.
 * Optionally start the node debugging.
 * @param  {Object} args - debugging arguments
 * @return {Stream}
 */
function serve(args) {
    var options = {
        script: paths.server + 'app.js',
        delayTime: 1,
        env: {
            'NODE_ENV': args.mode,
            'PORT': port
        },
        watch: [paths.server]
    };

    var exec;

    if (args.debug) {
        log('Running node-inspector. Browse to http://localhost:8080/debug?port=5858');
        exec = require('child_process').exec;
        exec('node-inspector');
        options.nodeArgs = [args.debug + '=5858'];
    }

    return plug.nodemon(options)
        .on('restart', function () {
            log('restarted!');
        });
}

gulp.task('serve', ['watch'], function ()
{

    serve({
        mode: 'dev',
        debug: '--debug'
    });

});

