$scope.changeColor = function(person, bool) {
    if(bool === true) {
        $scope.personColour = {color: '#'+person.colour};
    } else if (bool === false) {
        $scope.personColour = {color: 'white'}; //or, whatever the original color is
    }
};

//==============================================

<ul ng-repeat="bday in bdays">
  <li>
    <span ng-hide="editing" ng-click="editing = true">{{bday.name}} | {{bday.date}}</span>
    <form ng-show="editing" ng-submit="editing = false">
      <label>Name:</label>
      <input type="text" ng-model="bday.name" placeholder="Name" ng-required/>
      <label>Date:</label>
      <input type="date" ng-model="bday.date" placeholder="Date" ng-required/>
      <br/>
      <button class="btn" type="submit">Save</button>
      <a class="btn" ng-click="remove()">Delete</a>
    </form>
  </li>
</ul>

//===============================================

app.controller('MyCtrl', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
});

//==============================================
