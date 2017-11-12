/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/

export class TestNumber {
  public static equals (failMessage:string, val:number, expected:number) : void {
    if (val !== expected) {
      fail (failMessage + " - value was " + val + " expected " + expected);
    }
  }
  public static notNullOrUndefined (failMessage:string, val:number) : void {
    if ((val === null) || (val === undefined)) {
      fail (failMessage + " - expected not null or undefined value was " + val);
    }
  }
  public static notUndefined (failMessage:string, val:number) : void {
    if (val === undefined) {
      fail (failMessage + " - expected not undefined value was " + val);
    }
  }
  public static notNull (failMessage:string, val:number) : void {
    if (val === null) {
      fail (failMessage + " - expected not null value was " + val);
    }
  }
}
