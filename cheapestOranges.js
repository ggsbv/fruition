function cheapestOranges(objectList){
  var cheapestPrice = 0;
  var cheapestSeller = "";
  for (var shop in objectList){
    var currentObject = objectList[shop];
    if(currentObject['oranges'] !== undefined){
      var orangePrice = currentObject['oranges'];
      if(orangePrice < cheapestPrice || cheapestPrice === 0){
        cheapestPrice = orangePrice;
        cheapestSeller = shop;
      }
    };
  };
  return cheapestSeller;
};
