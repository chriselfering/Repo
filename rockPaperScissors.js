var userChoice = prompt("Do you choose rock, paper, or scissors?")

var computerChoice = Math.random();
// console.log(computerChoice)
if (computerChoice <= 0.33) {
    return "rock"
    } else if (computerChoice > 0.34 && computerChoice <= 0.66){ return "paper"
        } else {
        return "scissors"
      };
