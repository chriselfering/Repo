angular.module ('CakeApp', []);

angular.module('CakeApp')
  .controller('menuController', menuController)

  function menuController() {
    console.log('menuController loaded')
  }

angular.module('CakeApp')
  .controller('menuOrderController', menuOrderController)

  function menuOrderController() {
    console.log('menuOrderController loaded')
  }

angular.module('CakeApp')
  .factory('CheesecakeFactory', CheesecakeFactory)

function CheesecakeFactory() {
  console.log('factory is LOADED!')
  var menuItems = [{
    name: 'Egg Roll',
    calories: 6000,
    deliciousness: 3,
    flavor: 'Southwest',
    price: 50

  },{
    name: 'Strawberry Cheesecake',
    calories: 1500,
    deliciousness: 9,
    flavor: 'Strawberry',
    price: 9.95

  },{
    name: 'Turtle'
    calories: 1800,
    deliciousness: 10,
    flavor: 'Chocolate Turtle',
    price: 13

  }]
}
