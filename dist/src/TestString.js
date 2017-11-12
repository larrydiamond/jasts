"use strict";
/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
Object.defineProperty(exports, "__esModule", { value: true });
var TestString = /** @class */ (function () {
    function TestString() {
    }
    TestString.equals = function (failMessage, val, expected) {
        if (val !== expected) {
            fail(failMessage + " - value was " + val + " expected " + expected);
        }
    };
    TestString.notNullOrUndefined = function (failMessage, val) {
        if ((val === null) || (val === undefined)) {
            fail(failMessage + " - expected not null or undefined value was " + val);
        }
    };
    TestString.notNull = function (failMessage, val) {
        if (val === null) {
            fail(failMessage + " - expected not null value was " + val);
        }
    };
    TestString.notUndefined = function (failMessage, val) {
        if (val === undefined) {
            fail(failMessage + " - expected not undefined value was " + val);
        }
    };
    return TestString;
}());
exports.TestString = TestString;
