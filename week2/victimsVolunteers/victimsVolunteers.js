var vicNames = [];
var vicPhones = [];
var vicStreets = [];
var volNames = [];
var volPhones = [];
var volStreets = [];

var victimCount = parseInt(prompt('How many disaster victims are there?'));
for(var i = 0; i < victimCount; i++) {
	vicNames.push(prompt("Please enter a victim's name:"));
	vicPhones.push(prompt("Please enter this victim's phone number:"));
	vicStreets.push(prompt("Please enter this victim's street:"));
}

var volunteerCount = parseInt(prompt('How many volunteers are there?'));
for(var i = 0; i < volunteerCount; i++) {
	volNames.push(prompt("Please enter a volunteer's name:"));
	volPhones.push(prompt("Please enter this volunteer's phone number:"));
	volStreets.push(prompt("Please enter this volunteer's street:"));
}

var message = "There are " + victimCount + " victims" + "\n" +
	"There are " + volunteerCount + " volunteers" + "\n";

message += "Victims:\n";
for(var i = 0; i < victimCount; i++) {
	message += "  Name: " + vicNames[i] + ", " +
		"Phone: " + vicPhones[i] + ", " +
		"Street: " + vicStreets[i] + "\n";
}

message += "Volunteers:\n";
for(var i = 0; i < volunteerCount; i++) {
	message += "  Name: " + volNames[i] + ", " +
		"Phone: " + volPhones[i] + ", " +
		"Street: " + volStreets[i] + "\n";
}

alert(message);
