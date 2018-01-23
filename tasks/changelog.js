/**
 * Copyright (C) 2016 baidu.com
 * changelog.js
 *
 * changelog
 * 2016-11-16[09:56:40]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var assert = require('assert');
describe('CHANGELOG.md', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('CHANGELOG.md'));
    });
    it('should have a "[Unreleased]" block', function () {
        return fs.readFileAsync('CHANGELOG.md', {
            encoding: 'utf-8'
        }).then(function (content) {
            assert.ok(content.indexOf('[Unreleased]') > -1);
            assert.ok(content.indexOf('[Unreleased]') !== content.lastIndexOf('[Unreleased]'));
        });
    });
});