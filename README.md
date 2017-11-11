# jasts - Jasmine TypeScript classes for better unit testing

[Jasmine](https://jasmine.github.io/) is a really good testing tool for JavaScript.   It's well known, well documented, widely used, and has personally helped me catch a lot of bugs before they've seen the light of day.   Thank you to the Jasmine team for making a really good tool.

Jasmine has two areas where it can help developers better, and this project fills in those two gaps.

# Gap 1: Error messages when a test fails.

it ("Test emptying the shopping cart", function () {
  const cart:ShoppingCart = new ShoppingCart();
  cart.put (product1);
  cart.put (product2);
  cart.clear ();
  expect (cart.numberOfItemsInCart ()).toEqual(0);
  expect (cart.calculatePrice ()).toEqual(0);
});

And then you get back the helpful error message:
Expected undefined to equal 0.

This error message doesn't tell you which line brought back the wrong result.   
Do I have a bug with the first call or the second call?

# Gap 2: Type safety on tests.

Jasmine is written in JavaScript, not TypeScript.   And so Jasmine does some interesting manipulation to achieve some type safety on its calls.  We can do better in TypeScript since we can use the TypeScript compiler better to find errors in our tests at compile time.
