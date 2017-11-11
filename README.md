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

# Gap 2: Type safety on tests.

Jasmine is written in JavaScript, not TypeScript.   And so Jasmine does some interesting manipulation to achieve some type safety on its calls.  We can do better in TypeScript since we can use the TypeScript compiler better to find errors in our tests at compile time.

# Solution: npm i jasts --save-dev
```javascript
it ("Test emptying the shopping cart", function () {
  const cart:ShoppingCart = new ShoppingCart();
  cart.put (product1);
  cart.put (product2);
  cart.clear ();
  TestNumber ("no items in cart", cart.numberOfItemsInCart (), 0);
  TestNumber ("empty cart should cost nothing", cart.calculatePrice (), 0);
});
```

Returns the far better error message:  **Failed: empty cart should cost nothing - value was undefined expected 0**

Because you can provide text with each failure message, knowing exactly which statement failed with the chance for the developer to provide intelligent comments makes for quicker and easier debugging.

# What classes does Jasts provide?

<table class="methods" border="0" cellpadding="3" cellspacing="0" summary="Class Summary table, listing classes, and an explanation">
  <tr>
    <th class="colFirst" scope="col">Test</th>
    <th class="colLast" scope="col">&nbsp;</th>
  </tr>
  <tbody>
    <tr class="altColor">
      <td class="colFirst">First</td>
      <td class="colLast">&nbsp;</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">Second</td>
      <td class="colLast">&nbsp;</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">Third</td>
      <td class="colLast">&nbsp;</td>
    </tr>
    <tr class="altColor">
      <td class="colFirst">Fourth</td>
      <td class="colLast">&nbsp;</td>
    </tr>
  </tbody>
</table>
