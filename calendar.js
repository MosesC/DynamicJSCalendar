//|-------------------------------*NEED TO FIX!!!*//-------------------------------|
//| March 2013 does not work b/c the last day is in a row that is not printed!!!!  |
//|-------------------------------*NEED TO FIX!!!*//-------------------------------|

//A default constructor for our object used to get the day
var today = {
    dayOfWeek: 0,
    dayOfMonth: 0,
    month: 0,
    year: 2000,
    isLeapYear: false
};

//An array to help print the name of the days of the week
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//A date object used to collect data for our today object
var x = new Date();

//Initializing the values for today
today.dayOfWeek = x.getDay();
today.dayOfMonth = x.getDate();
today.month = x.getMonth();
today.year = x.getFullYear();

//Check to see if the year is a leap year
if (today.year % 400 === 0) {
    today.isLeapYear = true;
}
else if (today.year % 100 === 0) {
    today.isLeapYear = false;
}
else if (today.year % 4 === 0) {
    today.isLeapYear = true;
}
else {
    today.isLeapYear = false;
}

//A month array
var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var daysThisMonth;

//Set the amount of days in the month
if(today.month === 3 || today.month === 5 || today.month === 8 || today.month === 10){    
    daysThisMonth = 30;
}
else if(today.month === 1 && today.isLeapYear === true){
    daysThisMonth = 29;
}
else if(today.month === 1){
	daysThisMonth = 28;
}
else{
    daysThisMonth = 31;
}

//Creating the table
function makeTable(){
    document.write('<hr />\n<table border="1">');
	
	document.write('<tr><th colspan="7">'+theMonths[today.month]+'</th></tr>');
	
    //Weekday Title Loop
    for(i=0; i<weekdays.length; i++){
        document.write('<td>'+weekdays[i]+'</td>');
    }
	
	var dom = today.dayOfMonth;
	var dow = today.dayOfWeek;

	//find the day of the week the month started on
	if(dom>1){
		while(dom>1){
			dom--;
			//
			if(dow>0){
				dow--;
			}
			//Else make the day of week Saturday
			else{
				dow=6;
			}

		}
	}
    
    //daycount
    var daycount =1;
    var truecount=1;
    var overDaysThisMonth = false;
	
	/*Normally months need 5 rows to be printed. But, if the first of the month was on 
	* a friday && the month had 31 days, then 6 rows will be needed.
	*/
	var rowNum = 5;
	
	//If more than 31 day this month & the 1st of the month is after Thursday
	if(daysThisMonth == 31 && dow > 4){
		//Print an extra row so that the 31st day can be on the calendar
		rowNum++;
	}
	
	
    //Row loop
	
	var i=0;
	while(i<rowNum){
        document.write('<tr>');
        //Column loop
        for(j=1; j<8; j++, daycount++){
			
			//No number, just id
			if(daycount < dow+1 || truecount > daysThisMonth){
				//if the beginning day of week is greater than 1
				document.write('<td id="'+daycount+'"></td>');
			}
			else if(truecount === today.dayOfMonth){
				document.write('<td id="currentDay">'+truecount+'</td>');
				truecount++;
			}
			//Print the number and an id
			else{
				document.write('<td id="'+daycount+'">'+truecount+'</td>');
				truecount++;
			}
        }
		i++;
		document.write('</tr>');
    }
    document.write('</table>\n<hr />');
}
makeTable();