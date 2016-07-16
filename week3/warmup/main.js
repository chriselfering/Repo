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
