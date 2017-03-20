function cheapestFruit(objectList){
  var lowestAvg = 0;
  var cheapestFruit = "";
  var fruitTypes = ['apples', 'bananas', 'oranges'];
  for(var i = 0; i < fruitTypes.length; i++){
    var totalFruit = 0;
    var totalPrice = 0;

    var currentFruit = fruitTypes[i];

    for(var shop in objectList){
      var currentShop = objectList[shop];
      var currentPrice = currentShop[currentFruit];
      if(currentPrice !== undefined){
        totalPrice += currentPrice;
        totalFruit++;
      }
    };
    var currentAvg = totalPrice/totalFruit.toFixed(2);
    if(currentAvg < lowestAvg || lowestAvg === 0){
      lowestAvg = currentAvg;
      cheapestFruit = currentFruit;
    }
  };
  return cheapestFruit;
};
