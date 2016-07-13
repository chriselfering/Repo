angular.module('PokeApp',[])

angular.module('PokeApp')
  .controller('PallettTown', [pallettCtrl])

  function pallettCtrl() {
    var pCtrl = this;

    pCtrl.welcomeMessage = "Gotta Catch'em All!";
    pCtrl.pokemon = [
      'Charmander',
      'Pikachu',
      'Squirtle',
      'Bulbasaur',
      'Charizard',
      'Jigglypuff'
    ]

    pCtrl.jigglyPuff = {
      squishiness : 7,
      rage        : 'irate',
      rockstar    : true,
      name        : 'jigglypugg'
    }

    pCtrl.clonedPokemon = [
      'Charmander',
      'Pikachu',
      'Squirtle',
      'Bulbasaur',
      'Charizard',
      'Jigglypuff',
      'Jigglypuff',
      'Charmander',
      'Pikachu',
      'Squirtle',
      'Bulbasaur',
      'Charizard',
      'Jigglypuff'
    ]

    pCtrl.trainers = [
      {
        name    : "Ash",
        badges  : [
          "Earth",
          "Wind",
          "Fire"
        ],
        skill   : 1,
      },{
        name    : "Misty",
        badges  : [
          "Water"
        ],
        skill   : 3,
      },{
        name    : "Brock",
        badges  : [
          "Rock"
        ],
        skill   : 5,
      }
    ]

  }
