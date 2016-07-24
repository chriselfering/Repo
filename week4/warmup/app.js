angular.module('Chuckuthon', [])

  .controller('ChuckingAwesomeController', ChuckingAwesome)
    var chuck = this;

    chuck.title = "Time waits for no man..."
    chuck.quote = " "

  .factory('ChuckFactory', ChuckFactory)

  function ChuckingAwesome(){
    console.debug('Controller reporting for duty')
  }

  function ChuckFactory(){
    console.debug('Factory up and running!')
  }
