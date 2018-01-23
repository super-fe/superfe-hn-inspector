/**
 * Copyright (C) 2016 baidu.com
 * babelrc.js
 *
 * changelog
 * 2016-11-24[09:38:49]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const assert = require('assert');

describe('.babelrc', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('.babelrc'));
    });
    var babelrcContent;
    it('should be a JSON format', function () {
        return fs.readFileAsync('.babelrc', {
            encoding: 'utf-8'
        }).then(function (content) {
            babelrcContent = JSON.parse(content);
        });
    });
    it('should include a "presets" preset', function () {
        assert.ok(babelrcContent.presets, '"presets" exist');
        assert.ok(Array.isArray(babelrcContent.presets), 'is array format');
        assert.ok(babelrcContent.presets.indexOf('react-native') > -1, 'includes "react-native"');
    });
});