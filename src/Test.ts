/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/jasts/LICENSE
*/

export class Test {
  // tslint:disable-next-line:no-any
  public static equals (failMessage:string, val:any, expected:any) : void {
    if (val !== expected) {
      fail (failMessage + " - value was " + val + " expected " + expected);
      throw new Error(failMessage + " - value was " + val + " expected " + expected);
    }
  }
  // tslint:disable-next-line:no-any
  public static notNullOrUndefined (failMessage:string, val:any) : void {
    if ((val === null) || (val === undefined)) {
      fail (failMessage + " - expected not null or undefined value was " + val);
      throw new Error(failMessage + " - expected not null or undefined value was " + val);
    }
  }
  // tslint:disable-next-line:no-any
  public static notNull (failMessage:string, val:any) : void {
    if (val === null) {
      fail (failMessage + " - expected not null value was " + val);
      throw new Error(failMessage + " - expected not null value was " + val);
    }
  }
  // tslint:disable-next-line:no-any
  public static notUndefined (failMessage:string, val:any) : void {
    if (val === undefined) {
      fail (failMessage + " - expected not undefined value was " + val);
      throw new Error(failMessage + " - expected not undefined value was " + val);
    }
  }
  public static null (failMessage:string, val:any) : void {
    if (val !== null) {
      fail (failMessage + " - expected null value was " + val);
      throw new Error (failMessage + " - expected null value was " + val);
    }
  }
  public static undefined (failMessage:string, val:any) : void {
    if (val !== undefined) {
      fail (failMessage + " - expected undefined value was " + val);
      throw new Error (failMessage + " - expected undefined value was " + val);
    }
  }
}
