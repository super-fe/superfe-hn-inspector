/**
 * Copyright (C) 2016 baidu.com
 * src.js
 *
 * changelog
 * 2016-11-16[09:58:05]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var assert = require('assert');

describe('src', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('src'));
    });
    it('should be a directory', function () {
        return fs.statAsync('src').then(function (stat) {
            assert.ok(stat.isDirectory());
        });
    });
});