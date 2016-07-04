'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var plug = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var paths = require('../gulp.config.json');
var util = require('util');
var port = process.env.PORT || 7203;
var log = plug.util.log;
var proxyMiddleware = require('http-proxy-middleware');


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


function browserSyncInit(baseDir, browser)
{
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if ( baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1) )
    {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    var server = {
        baseDir: baseDir,
        routes : routes
    };

    /*
     * You can add a proxy to your backend by uncommenting the line below.
     * You just have to configure a context which will we redirected and the target url.
     * Example: $http.get('/users') requests will be automatically proxified.
     *
     * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
     */
    // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

    browserSync.instance = browserSync.init({
        startPath: '/',
        server   : server,
        browser  : browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function ()
{


    serve({
        mode: 'dev',
        debug: '--debug'
    });

//    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});


gulp.task('serve:dist', ['build'], function ()
{
    browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function ()
{
    browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function ()
{
    browserSyncInit(conf.paths.dist, []);
});