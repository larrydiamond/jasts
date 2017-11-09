/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
export declare class TestBoolean {
    static equals(failMessage: string, val: boolean, expected: boolean): void;
    static equalsTrue(failMessage: string, val: boolean): void;
    static equalsFalse(failMessage: string, val: boolean): void;
    static notNullOrUndefined(failMessage: string, val: boolean): void;
}
