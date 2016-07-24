//Wizard Constructor
function Wizard () {
  this.name = name;
  this.powers = powers;
  this.beardLength = beardLength;

}

Wizard.prototype.castSpell = function(spellIndex) {
  return ${this.name} casts ${this.power[spellIndex]}!
}

var smandalf = new Wizard(
  'Smandalf the Smug',
  [
    'Smug Storm',
    'Smug Punch'
  ],
  6
)
