/**
 * Copyright (C) 2016 baidu.com
 * env.js
 *
 * changelog
 * 2016-11-24[09:13:40]:revised
 * 2017-02-08[11:27:47]:change node/npm version requirements
 *
 * @author yanni4night@gmail.com
 * @version 0.1.1
 * @since 0.1.0
 */
'use strict';
var assert = require('assert');
var checkNodeVersion = require('check-node-version');

describe('env', function () {
    this.timeout(1e3);
    it('6.0.0 <= node < 7.0.0 and 4.0.0 <= npm < 5.0.0', function (done) {
        checkNodeVersion({
            node: '>= 6.0.0 < 7.0.0',
            npm: '>= 4.0.0 < 5.0.0'
        }, function (err, result) {
            if (err) {
                done(err);
            } else {
                assert.ok(result.isSatisfied);
                done();
            }
        })
    });
});