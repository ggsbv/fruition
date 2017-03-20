function applesAscending(objectList){
  var sortingArray = [];
  var results = {};
  for(var key in objectList){
    var currentShop = objectList[key];
    var currentApples = currentShop['apples'];
    if(currentApples !== undefined){
      sortingArray.push([key, currentApples]);
    }
  }
  sortingArray.sort(function(a, b){
    return a[1] - b[1];
  });
  for(var i = 0; i < sortingArray.length; i++){
    var currentElement = sortingArray[i];
    var currentShop = currentElement[0];
    var currentApples = currentElement[1];
    results[currentShop] = currentApples;
  }
  return results;
}
