/**
 * Copyright (C) 2016 baidu.com
 * eslint.js
 *
 * changelog
 * 2016-11-16[09:57:20]:revised
 * 2017-02-15[23:05:04]:rename to eslint
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 0.1.0
 */
'use strict';
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var assert = require('assert');
var yaml = require('js-yaml');

describe('.eslintrc.yml', function () {
    it('should exist', function () {
        assert.ok(fs.existsSync('.eslintrc.yml'));
    });
    it('should be a JSON/YML format', function () {
        return fs.readFileAsync('.eslintrc.yml', {
            encoding: 'utf-8'
        }).then(function (content) {
            var loaded = false;
            try {
                JSON.parse(content);
                loaded = loaded || true;
            } catch (e) {
                // empty
            }
            try {
                yaml.safeLoad(content);
                loaded = loaded || true;
            } catch (e) {
                // empty
            }
            assert.ok(loaded);
        });
    });
});