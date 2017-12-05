# jasts - Jasmine TypeScript classes for better unit testing

[Jasmine](https://jasmine.github.io/) is a really good testing tool for JavaScript.   It's well known, well documented, widely used, and has personally helped me catch a lot of bugs before they've seen the light of day.   Thank you to the Jasmine team for making a really good tool.

Jasmine has two areas where it can help developers better, and this project fills in those two gaps.

# Gap 1: Error messages when a test fails.

```javascript
it ("Test emptying the shopping cart", function () {
  const cart:ShoppingCart = new ShoppingCart();
  cart.put (product1);
  cart.put (product2);
  cart.clear ();
  expect (cart.numberOfItemsInCart ()).toEqual(0);
  expect (cart.calculatePrice ()).toEqual(0);
});
```

And then you get back the helpful error message:
**Expected undefined to equal 0.**

This error message doesn't tell you which line brought back the wrong result.   
Do I have a bug with the first call or the second call?

# Gap 2: Expect syntax is unusual

The **expect (something()).method(somethingElse())** syntax is criticized for being unusual (although it does open up a great deal of flexibility).

# Solution: npm i jasts --save-dev
```javascript
it ("Test emptying the shopping cart", function () {
  const cart:ShoppingCart = new ShoppingCart();
  cart.put (product1);
  cart.put (product2);
  cart.clear ();
  TestNumber.equals ("no items in cart", cart.numberOfItemsInCart (), 0);
  TestNumber.equals ("empty cart should cost nothing", cart.calculatePrice (), 0);
});
```

Returns the far better error message:  **Failed: empty cart should cost nothing - value was undefined expected 0**

Because you can provide text with each failure message, knowing exactly which statement failed with the chance for the developer to provide intelligent comments makes for quicker and easier debugging.

# What classes does Jasts provide?

<table class="methods" border="0" cellpadding="3" cellspacing="0" summary="Class Summary table, listing classes, and an explanation">
  <tr>
    <th class="colFirst" scope="col">TestBoolean</th>
    <th scope="col">&nbsp;</th>
    <th class="colLast" scope="col">&nbsp;</th>
  </tr>
  <tbody>
  <tr class="altColor">
    <td class="colFirst">&nbsp;</td>
    <td>true</td>
    <td class="colLast">TestBoolean.true ("Test failure message if this boolean isnt true", dataToTest);</td>
  </tr>
  <tr class="altColor">
    <td class="colFirst">&nbsp;</td>
    <td>false</td>
    <td class="colLast">TestBoolean.false ("Test failure message if this boolean isnt false", dataToTest);</td>
  </tr>
  <tr class="altColor">
    <td class="colFirst">&nbsp;</td>
    <td>null</td>
    <td class="colLast">TestBoolean.null ("Test failure message if this boolean isnt null", dataToTest);</td>
  </tr>
  <tr class="altColor">
    <td class="colFirst">&nbsp;</td>
    <td>undefined</td>
    <td class="colLast">TestBoolean.undefined ("Test failure message if this boolean isnt undefined", dataToTest);</td>
  </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>equals</td>
      <td class="colLast">TestBoolean.equals ("Test failure message if these booleans arent equal", dataToTest, dataToTestAgainst);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notNull</td>
      <td class="colLast">TestBoolean.notNull ("Test failure message if this boolean is null", dataToTest);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notUndefined</td>
      <td class="colLast">TestBoolean.notUndefined ("Test failure message if this boolean is undefined", dataToTest);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notNullOrUndefined</td>
      <td class="colLast">TestBoolean.notNullOrUndefined ("Test failure message if this boolean is null or undefined", dataToTest);</td>
    </tr>
  </tbody>
</table>

<table class="methods" border="0" cellpadding="3" cellspacing="0" summary="Class Summary table, listing classes, and an explanation">
  <tr>
    <th class="colFirst" scope="col">TestNumber</th>
    <th scope="col">&nbsp;</th>
    <th class="colLast" scope="col">&nbsp;</th>
  </tr>
  <tbody>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>equals</td>
      <td class="colLast">TestNumber.equals ("Test failure message if these numbers arent equal", dataToTest, numberItHasToEqual);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>greaterThan</td>
      <td class="colLast">TestNumber.greaterThan ("Test failure message if dataToTest is not greater than numberItHasToBeGreaterThan", dataToTest, numberItHasToBeGreaterThan);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>lessThan</td>
      <td class="colLast">TestNumber.lessThan ("Test failure message if dataToTest is not greater than numberItHasToBeLessThan", dataToTest, numberItHasToBeLessThan);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>undefined</td>
      <td class="colLast">TestNumber.undefined ("Test failure message if this number isnt undefined", dataToTest);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>null</td>
      <td class="colLast">TestNumber.null ("Test failure message if this number isnt null", dataToTest);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notEquals</td>
      <td class="colLast">TestNumber.notEquals ("Test failure message if these numbers are equal", dataToTest, numberItHasToEqual);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notNullOrUndefined</td>
      <td class="colLast">TestNumber.notNullOrUndefined ("Test failure message if this number is null or undefined", dataToTest);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notUndefined</td>
      <td class="colLast">TestNumber.notUndefined ("Test failure message if this number is undefined", dataToTest);</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td>notNull</td>
      <td class="colLast">TestNumber.notNull ("Test failure message if this number is null", dataToTest);</td>
    </tr>
  </tbody>
</table>

<table class="methods" border="0" cellpadding="3" cellspacing="0" summary="Class Summary table, listing classes, and an explanation">
  <tr>
    <th class="colFirst" scope="col">TestString</th>
    <th class="colLast" scope="col">&nbsp;</th>
  </tr>
  <tbody>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">equals</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">notNullOrUndefined</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">notNull</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">notUndefined</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">null</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">undefined</td>
    </tr>
  </tbody>
</table>

<table class="methods" border="0" cellpadding="3" cellspacing="0" summary="Class Summary table, listing classes, and an explanation">
  <tr>
    <th class="colFirst" scope="col">Test</th>
    <th class="colLast" scope="col">&nbsp;</th>
  </tr>
  <tbody>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">equals</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">notNullOrUndefined</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">notNull</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">notUndefined</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">null</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">&nbsp;</td>
      <td class="colLast">undefined</td>
    </tr>
  </tbody>
</table>
