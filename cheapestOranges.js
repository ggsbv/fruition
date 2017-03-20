function cheapestOranges(objectList){
  var cheapestPrice = 0;
  for (var shop in objectList){
    if(shop['orange'] !== undefined){
      var orangePrice = shop['orange'];
      if(orangePrice < cheapestPrice || cheapestPrice === 0){
        cheapestPrice = orangePrice;
        cheapestSeller = shop;
      }
    };
  };
  return cheapestSeller;
};
