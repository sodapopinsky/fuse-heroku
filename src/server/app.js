/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 7200;
var environment = process.env.NODE_ENV;
var path = require('path');

switch (environment) {
    case 'production':
        console.log('productionxxx');
        console.log(__dirname);
        console.log(path.join(__dirname, '../../dist/'));
        app.set('baseDir',path.join(__dirname, '../../dist/'));
        app.use('/', express.static(app.get('baseDir')));

        break;
    default:
        console.log('dev');
        console.log(path.join(__dirname, '../../.tmp/serve/'));
        app.set('baseDir',path.join(__dirname, '../../.tmp/serve/'));
        app.use('/', express.static(path.join(__dirname, '../../.tmp/serve')));
        app.use('/bower_components', express.static(path.join(__dirname, '../../bower_components')));
        app.use('/app', express.static(path.join(__dirname, '../../src/app')));
        app.use('/assets', express.static(path.join(__dirname, '../../src/assets')));
        break;
}

app.get(
    '*', function (req, res) {
        res.sendFile(path.resolve(app.get('baseDir') + 'index.html'));
    });

http.listen(
    port, function () {
        console.log('Express server listening on port ' + port);
        console.log(
            'env = ' + app.get('env') + '\n__dirname = ' + __dirname + '\nprocess.cwd = ' +
            process.cwd());
    });


