/**
 * Copyright (C) 2016 baidu.com
 * editorconfig.js
 *
 * changelog
 * 2016-11-16[09:55:10]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var editorconfig = require('editorconfig');
var assert = require('assert');

describe('.editorconfig', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('.editorconfig'));
    });
    it('should format correctly', function () {
        return editorconfig.parse('.editorconfig');
    });
});