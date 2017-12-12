"use strict";
/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
Object.defineProperty(exports, "__esModule", { value: true });
var TestNumber = /** @class */ (function () {
    function TestNumber() {
    }
    TestNumber.equals = function (failMessage, val, expected) {
        if (val !== expected) {
            fail(failMessage + " - value was " + val + " expected " + expected);
            throw new Error(failMessage + " - value was " + val + " expected " + expected);
        }
    };
    TestNumber.notEquals = function (failMessage, val, expected) {
        if (val === expected) {
            fail(failMessage + " - value was " + val + " expected not to be " + expected);
            throw new Error(failMessage + " - value was " + val + " expected not to be " + expected);
        }
    };
    TestNumber.notNullOrUndefined = function (failMessage, val) {
        if ((val === null) || (val === undefined)) {
            fail(failMessage + " - expected not null or undefined value was " + val);
            throw new Error(failMessage + " - expected not null or undefined value was " + val);
        }
    };
    TestNumber.notUndefined = function (failMessage, val) {
        if (val === undefined) {
            fail(failMessage + " - expected not undefined value was " + val);
            throw new Error(failMessage + " - expected not undefined value was " + val);
        }
    };
    TestNumber.notNull = function (failMessage, val) {
        if (val === null) {
            fail(failMessage + " - expected not null value was " + val);
            throw new Error(failMessage + " - expected not null value was " + val);
        }
    };
    TestNumber.greaterThan = function (failMessage, val, minimum) {
        if (val === undefined) {
            fail(failMessage + " - expected greater than " + minimum + " value was undefined");
            throw new Error(failMessage + " - expected greater than " + minimum + " value was undefined");
        }
        if (val === null) {
            fail(failMessage + " - expected greater than " + minimum + " value was null");
            throw new Error(failMessage + " - expected greater than " + minimum + " value was null");
        }
        if (val <= minimum) {
            fail(failMessage + " - expected greater than " + minimum + " value was " + val);
            throw new Error(failMessage + " - expected greater than " + minimum + " value was " + val);
        }
    };
    TestNumber.lessThan = function (failMessage, val, maximum) {
        if (val === undefined) {
            fail(failMessage + " - expected less than " + maximum + " value was undefined");
            throw new Error(failMessage + " - expected less than " + maximum + " value was undefined");
        }
        if (val === null) {
            fail(failMessage + " - expected less than " + maximum + " value was null");
            throw new Error(failMessage + " - expected less than " + maximum + " value was null");
        }
        if (val >= maximum) {
            fail(failMessage + " - expected less than " + maximum + " value was " + val);
            throw new Error(failMessage + " - expected less than " + maximum + " value was " + val);
        }
    };
    TestNumber.null = function (failMessage, val) {
        if (val !== null) {
            fail(failMessage + " - expected null value was " + val);
            throw new Error(failMessage + " - expected null value was " + val);
        }
    };
    TestNumber.undefined = function (failMessage, val) {
        if (val !== undefined) {
            fail(failMessage + " - expected undefined value was " + val);
            throw new Error(failMessage + " - expected undefined value was " + val);
        }
    };
    return TestNumber;
}());
exports.TestNumber = TestNumber;
