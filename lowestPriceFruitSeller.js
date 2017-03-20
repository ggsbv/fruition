function lowestPriceFruitSeller(objectList){
  var fruitTypes = ['apples', 'bananas', 'oranges'];
  var lowestPrice = 0;
  var lowestSeller = "";
  for(var i = 0; i < fruitTypes.length; i++){
    var currentFruit = fruitTypes[i];
    for(var shop in objectList){
      var currentShop = objectList[shop];
      var currentPrice = currentShop[currentFruit];
      if(currentPrice <= lowestPrice || lowestPrice === 0){
        lowestPrice = currentPrice;
        lowestSeller = shop;
      }
    };
  };
  return lowestSeller;
}
