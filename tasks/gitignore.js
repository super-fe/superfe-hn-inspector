/**
 * Copyright (C) 2016 baidu.com
 * gitignore.js
 *
 * changelog
 * 2016-11-24[09:32:16]:revised
 * 2017-02-06[12:43:23]:"output" instead of "bundle"
 *
 * @author yanni4night@gmail.com
 * @version 0.1.1
 * @since 0.1.0
 */
'use strict';
var fs = require('fs');
var assert = require('assert');
var gitignore = require('parse-gitignore');

describe('.gitignore', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('.gitignore'));
    });
    it('should ignore "output"', function () {
        var patterns = gitignore('.gitignore');
        assert.ok(patterns.join(' ').indexOf('output') > -1);
    });
});