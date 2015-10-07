(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2,
      description: 'wt wt wt wt',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: "Something",
      price: 10.95,
      description: 'ert eetg ssgwf',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: "Something",
      price: 10.85,
      description: 'ert eetg ssgwf',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: "Something",
      price: 6.95,
      description: 'ert eetg ssgwf',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: "Something",
      price: 3.95,
      description: 'ert eetg ssgwf',
      canPurchase: true,
      soldOut: false,
    }
  ]

})();

