const expectedResult = {
  shopwrong : 2,
  woolingsworth : 4,
  kwakspar : 4,
  chockers : 5
};
describe('function applesAscending', function(){
  it('should return object list stored in expectedResult var', function(){
    assert.deepEqual(expectedResult, applesAscending(data));
  });
});
