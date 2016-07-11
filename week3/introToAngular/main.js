angular.module('mod1', [])

angular.module('mod1')
  .controller('ctrl1',[
    '$scope', oneCtrl
  ])


function oneCtrl($scope){
  $scope.greeting = 'Hello friend!'
  $scope.clickFunction = function(){
    $scope.greeting = "What's up homey?"
  $scope.clickList = function(){
    document.write('-Item 1', '-Item 2', '-Item 3')
    }
  }
}
