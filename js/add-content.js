var today = new Date();
var hourNow = today.getHours();
var greeting;
var day = today.getDay();

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("The day index is " + day);

console.log("The days of the week are (array) " + daysOfTheWeek);

if (hourNow > 18) {
		greeting = "Good evening, its " + daysOfTheWeek [day];
	} else if (hourNow > 12) {
		greeting = "Good afternoon Nigel! Happy " + daysOfTheWeek [day];
	} else if (hourNow > 0) {
		greeting = "Good Morning Nigel! Happy " + daysOfTheWeek [day];
	} else {
		greeting = "Welcome!";
	}
	
document.write("<h3>" + greeting + "</h3>");


console.log("The days of the week " + daysOfTheWeek);