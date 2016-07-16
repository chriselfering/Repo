//Declare a module in angular named "WeddingBells"
angular.module("WeddingBells", [])

//reference the module "WeddingBells"
angular.module("WeddingBells")
//chain a controller named "BallAndChain" mapped to a funtion Eternity with takes no dependencies
  .controller("ballAndChain", Eternity)
Eternity.$inject = ['divorceFactory']
//Declare a function Eternity
function Eternity(divorceFactory) {

}
console.info ('Eternity.controller is loaded')
console.debug('Eternity.controller.divorceFactory is loaded')

var love = this
love.info = divorceFactory.info

//Declare a factory on the module WeddingBells
angular.module("WeddingBells")
  .factory('divorceFactory', Splitsies)

function Splitsies() {
  console.info = ("splitsies factory is loaded")
  var data = [{
        // couple 1
        year: 2013,
        spouses: [{
            age: 23,
            occupation: 'Dentist',
            education: 'DDS',
            gender: 'female'
        },{
            age: 43,
            occupation: 'Plumber',
            education: 'Highschool',
            gender: 'male'
        }],
        duration: 2
    },{ // couple 2
        year: 2000,
        spouses: [{
            age: 32,
            occupation: 'Burger Flipper Engineer',
            education: 'RefactorU',
            gender: 'male'
        },{
            age: 35,
            occupation: 'WNBA',
            education: 'G.E.D.',
            gender: 'female'
        }],
        duration: 5
    },{ // couple 3
        year: 1865,
        spouses: [{
            age: 20,
            occupation: 'Buggysmith',
            education: 'None',
            gender: 'male'
        },{
            age: 15,
            occupation: 'Doll Dresser',
            education: 'Mom',
            gender: 'female'
        }],
        duration: 10
    }]
  }
