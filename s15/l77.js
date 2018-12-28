// SEZIONE 15, LEZIONE 77 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// OGGETTO DATE

// DATE OBJECT 
var date = new Date();
var myBirthday = new Date(1985, 11, 30);

var dayOfWeek = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURDSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY'
];

console.log(date.toString());
console.log(myBirthday.toString());

// HOW TO SET A DATE
myBirthday.setFullYear(2018);
myBirthday.setMonth(11);
myBirthday.setDate(28);
myBirthday.setHours(05);
myBirthday.setMinutes(10);
myBirthday.setSeconds(20);
console.log('Today is (forced version): ' + myBirthday.toString());

// GET THE DAY OF TODAY
console.log(myBirthday.getDate());
// GET THE DAY OF THE WEEK
console.log(myBirthday.getDay());
console.log(dayOfWeek[myBirthday.getDay()]);
