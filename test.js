describe("sumIt", function () {

  it("sums up three arguments", function () {
    assert.equal(sumIt(2, 3, 1), 6);
    assert.equal(sumIt(1, 1, 1), 3);
    assert.equal(sumIt(2, 3, 2), 7);

  });

});

describe("sumIt", function () {

  it("returns NaN for any other number of arguments than three", function () {
    assert.equal(sumIt(2, 3), NaN);
    assert.equal(sumIt(3), NaN);
    assert.equal(sumIt(2, 3, 5, 3), NaN);
    assert.equal(sumIt(), NaN);
    assert.equal(sumIt([2, 3, 4, 5], 1, 2), NaN);
  });

});

describe("sumIt", function () {

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