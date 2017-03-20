function cheapestOranges(objectList){
  var cheapestPrice = 0;
  var cheapestShop = "";
  for(var shop in objectList){
    var currentShop = objectList[shop];
    var currentPrice = currentShop['oranges'];
    if(currentPrice < cheapestPrice || cheapestPrice === 0){
      cheapestPrice = currentPrice;
      cheapestShop = shop;
    }
  }
  return cheapestShop;
}
