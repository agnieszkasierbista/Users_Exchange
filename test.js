describe("sumIt", function () {

  // // adds an alert before and after the whole testing
  // before(() => alert("Testing started – before all tests"));
  // after(() => alert("Testing finished – after all tests"));

  // //adds an allert before and after each single test
  // beforeEach(() => alert("Before a test – enter a test"));
  // afterEach(() => alert("After a test – exit a test"));

  it("sums up three arguments", function () {
    assert.equal(sumIt(2, 3, 1), 6);
    assert.equal(sumIt(1, 1, 1), 3);
    assert.equal(sumIt(2, 3, 2), 7);

  });

  describe("sums up any three integers", function () {

    function makeTest(x, y, z) {
      let expected = x + y + z;
      it(`The sum of ${x}, ${y}, ${z} is ${expected}`, function () {
        assert.equal(sumIt(x, y, z), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x, x + 1, x + 2);
    }

  });

});

describe("sumIt", function () {

  it("returns NaN for any other number of arguments than three", function () {
    assert.isNaN(sumIt(2, 3));
  });

});
describe("sumIt", function () {

  it("returns NaN for any other number of arguments than three", function () {
    assert.isNaN(sumIt(3));
  });

}); describe("sumIt", function () {

  //generates error, sums first three arguments and leaves the 4th
  it("returns NaN for any other number of arguments than three", function () {
    assert.isNaN(sumIt(2, 3, 5, 3));
  });

}); describe("sumIt", function () {

  it("returns NaN for any other number of arguments than three", function () {
    assert.isNaN(sumIt());
  });

}); describe("sumIt", function () {

  it("returns NaN for any other number of arguments than three", function () {
    assert.isNaN(sumIt([2, 3, 4, 5], 1, 2));
  });

});