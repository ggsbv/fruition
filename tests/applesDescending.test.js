const expectedResult1 = {
  chockers : 5,
  woolingsworth : 4,
  kwakspar : 4,
  shopwrong : 2
};

describe("function applesDescending", function(){
  it("should return what is stored in expectedResult", function(){
    assert.deepEqual(expectedResult1, applesDescending(data));
  });
});
