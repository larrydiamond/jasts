/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
export declare class TestNumber {
    static equals(failMessage: string, val: number, expected: number): void;
    static notNullOrUndefined(failMessage: string, val: number): void;
    static notUndefined(failMessage: string, val: number): void;
    static notNull(failMessage: string, val: number): void;
    static greaterThan(failMessage: string, val: number, minimum: number): void;
    static lessThan(failMessage: string, val: number, maximum: number): void;
}
