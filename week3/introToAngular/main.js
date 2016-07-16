angular.module('app', [])

//Console Log button
angular.module('app')
  .controller('ctrlConsole', [
    '$scope', consoleCtrl
  ])
    function consoleCtrl($scope){
      $scope.logGreeting = function() {
        console.log("How are you Pikachu?")
      }
    };

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
      $scope.showAlert = function() {
        $scope.myList = true;
      };
    }

//exclamation button
// angular.module('app')
//   .controller('ctrlExcl', [
//     '$scope', exclControl
//   ])
//
//   function exclControl($scope) {
//     $scope.exclaim =
//   }

//confirm link
// angular.module('app')
//   .controller('ctrlLink', [
//     '$scope', linkCtrl
//   ])
//
//   function linkCtrl($scope) {
//     $scope.confirm
//   }
