function cheapestFruit(objectList){
  const fruitTypes = ['apples', 'bananas', 'oranges'];
  var lowestAvg = 0;
  var cheapest = "";
  for(var i = 0; i < fruitTypes.length; i++){
    var total = 0;
    var totalPrice = 0;
    var currentFruit = fruitTypes[i];
    for(var shop in objectList){
      var currentShop = objectList[shop];
      var currentPrice = currentShop[currentFruit];
      if(currentPrice !== undefined){
        totalPrice += currentPrice;
        total++;
      };
    };
    var currentAvg = totalPrice/total.toFixed(2);
    if(currentAvg < lowestAvg || lowestAvg === 0){
      lowestAvg = currentAvg;
      cheapest = currentFruit;
    };
  };
  return cheapest;
};
