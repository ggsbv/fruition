function applesDescending(objectList){
  var sortingArray = [];
  var result = {};

  for(var shop in objectList){
    var currentShop = objectList[shop];
    var currentPrice = currentShop['apples'];
    if(currentPrice !== undefined){
      sortingArray.push([shop, currentPrice]);
    }
  }

  sortingArray.sort(function(a, b){
    return b[1] - a[1];
  });

  for(var i = 0; i < sortingArray.length; i++){
    var currentElement = sortingArray[i];
    var currentShop = currentElement[0];
    var currentPrice = currentElement[1];
    result[currentShop] = currentPrice;
  };
  return result;
};
