(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  })

  var gems = [
    {
      name: "Dodecahedron",
      price: 2,
      description: 'wt wt wt wt',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "I love it",
          author: "iulia@gmail.com",
        },
        {
          stars: 4,
          body: "I love it",
          author: "tom@gmail.com",
        },
        {
          stars: 5,
          body: "I love it",
          author: "alex@gmail.com",
        }
      ],
    },
    {
      name: "Something",
      price: 10.95,
      description: 'ert eetg ssgwf',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "I love it",
          author: "iulia@gmail.com",
        },
        {
          stars: 4,
          body: "I love it",
          author: "tom@gmail.com",
        },
        {
          stars: 5,
          body: "I love it",
          author: "alex@gmail.com",
        }
      ],
    },
    {
      name: "Something",
      price: 10.85,
      description: 'ert eetg ssgwf',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "I love it",
          author: "iulia@gmail.com",
        },
        {
          stars: 4,
          body: "I love it",
          author: "tom@gmail.com",
        },
        {
          stars: 5,
          body: "I love it",
          author: "alex@gmail.com",
        }
      ],
    },
  ]

})();

