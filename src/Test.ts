/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/

export class test {
  // tslint:disable-next-line:no-any
  public static equals (failMessage:string, val:any, expected:any) : void {
    if (val !== expected) {
      fail (failMessage + " - value was " + val + " expected " + expected);
    }
  }
  // tslint:disable-next-line:no-any
  public static notNullOrUndefined (failMessage:string, val:any) : void {
    if ((val === null) || (val === undefined)) {
      fail (failMessage + " - expected not null or undefined value was " + val);
    }
  }
  // tslint:disable-next-line:no-any
  public static notNull (failMessage:string, val:any) : void {
    if (val === null) {
      fail (failMessage + " - expected not null value was " + val);
    }
  }
  // tslint:disable-next-line:no-any
  public static notUndefined (failMessage:string, val:any) : void {
    if (val === undefined) {
      fail (failMessage + " - expected not undefined value was " + val);
    }
  }
}
