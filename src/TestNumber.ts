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
  public static notEquals (failMessage:string, val:number, expected:number) : void {
    if (val === expected) {
      fail (failMessage + " - value was " + val + " expected not to be " + expected);
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
  public static greaterThan (failMessage:string, val:number, minimum:number) : void {
    if (val === undefined) {
      fail (failMessage + " - expected greater than " + minimum + " value was undefined");
    }
    if (val === null) {
      fail (failMessage + " - expected greater than " + minimum + " value was null");
    }
    if (val <= minimum) {
      fail (failMessage + " - expected greater than " + minimum + " value was " + val);
    }
  }
  public static lessThan (failMessage:string, val:number, maximum:number) : void {
    if (val === undefined) {
      fail (failMessage + " - expected less than " + maximum + " value was undefined");
    }
    if (val === null) {
      fail (failMessage + " - expected less than " + maximum + " value was null");
    }
    if (val >= maximum) {
      fail (failMessage + " - expected less than " + maximum + " value was " + val);
    }
  }
  public static null (failMessage:string, val:number) : void {
    if (val !== null) {
      fail (failMessage + " - expected null value was " + val);
    }
  }
  public static undefined (failMessage:string, val:number) : void {
    if (val !== undefined) {
      fail (failMessage + " - expected undefined value was " + val);
    }
  }
}
