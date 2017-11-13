/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
export declare class TestString {
    static equals(failMessage: string, val: string, expected: string): void;
    static notNullOrUndefined(failMessage: string, val: string): void;
    static notNull(failMessage: string, val: string): void;
    static notUndefined(failMessage: string, val: string): void;
    static null(failMessage: string, val: string): void;
    static undefined(failMessage: string, val: string): void;
}
