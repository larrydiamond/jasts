/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/
export declare class Test {
    static equals(failMessage: string, val: any, expected: any): void;
    static notNullOrUndefined(failMessage: string, val: any): void;
    static notNull(failMessage: string, val: any): void;
    static notUndefined(failMessage: string, val: any): void;
    static null(failMessage: string, val: any): void;
    static undefined(failMessage: string, val: any): void;
}
