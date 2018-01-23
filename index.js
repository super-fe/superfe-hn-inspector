/**
 * Copyright (C) 2018 baidu.com
 * index.js
 *
 * changelog
 * 2018-01-23[11:15:42]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
var glob = require('glob');
var Mocha = require('mocha');

function bootstrap(cwd) {
    cwd = cwd || process.cwd();
    var mocha = new Mocha();
    glob('tasks/*.js', {
        cwd: __dirname
    }, function (err, files) {
        if (err) {
            process.exit(-1);
        }


        files.forEach(function (file) {
            mocha.addFile(__dirname + '/' + file)
        });

        mocha.run(function (failures) {
            process.on('exit', function () {
                process.exit(failures);
            });
        });
    });
}


module.exports = bootstrap;