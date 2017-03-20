function allShopsThatSellOranges(objectList){
  var shopsThatSellOranges = [];

  for(var shop in objectList){
    var currentShop = objectList[shop];
    var currentPrice = currentShop['oranges'];
    if(currentPrice !== undefined){
      console.log(currentPrice)
      shopsThatSellOranges.push(shop);
    };
  };
  return shopsThatSellOranges;
}
