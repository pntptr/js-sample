// SEZIONE 15, LEZIONE 77 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// OGGETTO DATE

// DATE OBJECT 
var date = new Date();
var myBirthday = new Date(1985, 11, 30);

var dayOfWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURDSDAY',
    'FRIDAY',
    'SATURDAY' 
];

console.log(date.toString());
console.log(myBirthday.toString());

// HOW TO SET A DATE
date.setFullYear(2018);
date.setMonth(11);
date.setDate(28);
date.setHours(05);
date.setMinutes(10);
date.setSeconds(20);
console.log('Today is (forced version): ' + date.toString());

// GET THE DAY OF TODAY
console.log(date.getDate());
// GET THE DAY OF THE WEEK
console.log(date.getDay());
console.log(dayOfWeek[date.getDay()]);
