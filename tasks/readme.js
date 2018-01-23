/**
 * Copyright (C) 2016 baidu.com
 * readme.js
 *
 * changelog
 * 2016-11-16[09:56:08]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var assert = require('assert');

describe('README.md', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('README.md'));
    });
});