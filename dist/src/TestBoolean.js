"use strict";
/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
Object.defineProperty(exports, "__esModule", { value: true });
var TestBoolean = /** @class */ (function () {
    function TestBoolean() {
    }
    TestBoolean.equals = function (failMessage, val, expected) {
        if (val !== expected) {
            fail(failMessage + " - value was " + val + " expected " + expected);
        }
    };
    TestBoolean.true = function (failMessage, val) {
        if (val !== true) {
            fail(failMessage + " - expected true value was " + val);
        }
    };
    TestBoolean.false = function (failMessage, val) {
        if (val !== false) {
            fail(failMessage + " - expected false value was " + val);
        }
    };
    TestBoolean.notNullOrUndefined = function (failMessage, val) {
        if ((val === null) || (val === undefined)) {
            fail(failMessage + " - expected not null or undefined value was " + val);
        }
    };
    TestBoolean.notNull = function (failMessage, val) {
        if (val === null) {
            fail(failMessage + " - expected not null value was " + val);
        }
    };
    TestBoolean.notUndefined = function (failMessage, val) {
        if (val === undefined) {
            fail(failMessage + " - expected not undefined value was " + val);
        }
    };
    TestBoolean.null = function (failMessage, val) {
        if (val !== null) {
            fail(failMessage + " - expected null value was " + val);
        }
    };
    TestBoolean.undefined = function (failMessage, val) {
        if (val !== undefined) {
            fail(failMessage + " - expected undefined value was " + val);
        }
    };
    return TestBoolean;
}());
exports.TestBoolean = TestBoolean;
