/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/

export class TestString {
  public static equals (failMessage:string, val:string, expected:string) : void {
    if (val !== expected) {
      fail (failMessage + " - value was " + val + " expected " + expected);
    }
  }
  public static notNullOrUndefined (failMessage:string, val:string) : void {
    if ((val === null) || (val === undefined)) {
      fail (failMessage + " - expected not null or undefined value was " + val);
    }
  }
  public static notNull (failMessage:string, val:string) : void {
    if (val === null) {
      fail (failMessage + " - expected not null value was " + val);
    }
  }
  public static notUndefined (failMessage:string, val:string) : void {
    if (val === undefined) {
      fail (failMessage + " - expected not undefined value was " + val);
    }
  }
}
