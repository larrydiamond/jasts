"use strict";
/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test() {
    }
    // tslint:disable-next-line:no-any
    Test.equals = function (failMessage, val, expected) {
        if (val !== expected) {
            fail(failMessage + " - value was " + val + " expected " + expected);
            throw new Error(failMessage + " - value was " + val + " expected " + expected);
        }
    };
    // tslint:disable-next-line:no-any
    Test.notNullOrUndefined = function (failMessage, val) {
        if ((val === null) || (val === undefined)) {
            fail(failMessage + " - expected not null or undefined value was " + val);
            throw new Error(failMessage + " - expected not null or undefined value was " + val);
        }
    };
    // tslint:disable-next-line:no-any
    Test.notNull = function (failMessage, val) {
        if (val === null) {
            fail(failMessage + " - expected not null value was " + val);
            throw new Error(failMessage + " - expected not null value was " + val);
        }
    };
    // tslint:disable-next-line:no-any
    Test.notUndefined = function (failMessage, val) {
        if (val === undefined) {
            fail(failMessage + " - expected not undefined value was " + val);
            throw new Error(failMessage + " - expected not undefined value was " + val);
        }
    };
    Test.null = function (failMessage, val) {
        if (val !== null) {
            fail(failMessage + " - expected null value was " + val);
            throw new Error(failMessage + " - expected null value was " + val);
        }
    };
    Test.undefined = function (failMessage, val) {
        if (val !== undefined) {
            fail(failMessage + " - expected undefined value was " + val);
            throw new Error(failMessage + " - expected undefined value was " + val);
        }
    };
    return Test;
}());
exports.Test = Test;
