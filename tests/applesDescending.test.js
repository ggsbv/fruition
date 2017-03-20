const expectedResult2 = {
  chockers : 5,
  woolingsworth : 4,
  kwakspar : 4,
  shopwrong : 2
};

describe("function applesDescending", function(){
  it("should return data stored in 'expectedResult' variable", function(){
    assert.deepEqual(expectedResult2, applesDescending(data));
  });
});
