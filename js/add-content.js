var today = new Date();
var hourNow = today.getHours();
var greeting;
var day = today.getDay();
var weekDay;

if (day ==3){
	weekDay = "Wednesday";
}

if (hourNow > 18) {
		greeting = "Good evening, its " + weekDay;
	} else if (hourNow > 12) {
		greeting = "Good afternoon Nigel! Happy " + weekDay;
	} else if (hourNow > 0) {
		greeting = "Good Morning Nigel! Happy " + weekDay;
	} else {
		greeting = "Welcome!";
	}
	
document.write("<h3>" + greeting + "</h3>");