angular.module('app', [])

//Console Log button
angular.module('app')
  .controller('ctrlConsole',
    consoleCtrl
  )

    function consoleCtrl($scope, $log){
      $scope.$log = $log;
      $scope.consoleMessage = 'Hello there pikachu!'
      }

// greeting button
angular.module('app')
  .controller('ctrl1',[
    '$scope', oneCtrl
  ])
function oneCtrl($scope){
  $scope.greeting = 'Hello friend!'
  $scope.clickFunction = function(){
    $scope.greeting = "What's up homey?"
  }
}

//list Controller
angular.module('app')
  .controller('ctrlList',[
    '$scope', listCtrl
  ])

    function listCtrl($scope) {
      $scope.myList = false;
      $scope.showAlert = function(){
        $scope.myList = true;
      };
    }

//mouse hover
angular.module('app')
  .controller('ctrlMouse', [
    '$scope', mouseCtrl
  ])

    function mouseCtrl($scope) {
  
    };
