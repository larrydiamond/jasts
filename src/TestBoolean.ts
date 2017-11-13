/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/

export class TestBoolean {
  public static equals (failMessage:string, val:boolean, expected:boolean) : void {
    if (val !== expected) {
      fail (failMessage + " - value was " + val + " expected " + expected);
    }
  }
  public static equalsTrue (failMessage:string, val:boolean) {
    if (val !== true) {
      fail (failMessage + " - expected true value was " + val);
    }
  }
  public static equalsFalse (failMessage:string, val:boolean) {
    if (val !== false) {
      fail (failMessage + " - expected false value was " + val);
    }
  }
  public static notNullOrUndefined (failMessage:string, val:boolean) : void {
    if ((val === null) || (val === undefined)) {
      fail (failMessage + " - expected not null or undefined value was " + val);
    }
  }
  public static notNull (failMessage:string, val:boolean) : void {
    if (val === null) {
      fail (failMessage + " - expected not null value was " + val);
    }
  }
  public static notUndefined (failMessage:string, val:boolean) : void {
    if (val === undefined) {
      fail (failMessage + " - expected not undefined value was " + val);
    }
  }
  public static null (failMessage:string, val:boolean) : void {
    if (val !== null) {
      fail (failMessage + " - expected null value was " + val);
    }
  }
  public static undefined (failMessage:string, val:boolean) : void {
    if (val !== undefined) {
      fail (failMessage + " - expected undefined value was " + val);
    }
  }
}
