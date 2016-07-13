//
// //two arguments to create the module
angular.module('macTheModule', [])
//
// //only one argument will retrieve the existing module; add the CONTROLLER (with two more arguments)
// angular.module('macTheModule')
//   .controller('craigTheController', [
//       '$scope', craigCtrl
//   ]);
//
// function craigCtrl($scope){
//   console.log('Controller is working!')
//
//   $scope.greeting = 'Hello friend!'
//   $scope.subGreeting = 'Power Rangers Only'
//   $scope.fightPutty = function(){
//     $scope.subGreeting = ('Punch Noises! The putty disappeared...')
//   }
// }

angular.module('macTheModule')
  .controller('betaCtrl', betaCtrl)

function betaCtrl(){
  // this.beans = 'Black beans'
  var beta = this
  beta.myFavoiteBeans = []
  beta.beans = 'Black beans'
  beta.addBeans = function () {
      beta.myFavoiteBeans.push(beta.myFavoiteBeans) //beta.myFavoriteBeans came from the ng-model
  }
beta.removeLastBeans = function() {
  beta.myFavoriteBeans.pop();
}

  window.beta = beta
}
