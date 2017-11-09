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
        }
    };
    TestNumber.notNullOrUndefined = function (failMessage, val) {
        if ((val === null) || (val === undefined)) {
            fail(failMessage + " - expected not null or undefined value was " + val);
        }
    };
    return TestNumber;
}());
exports.TestNumber = TestNumber;
