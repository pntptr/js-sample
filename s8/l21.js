// SEZIONE 8, LEZIONE 21 - CORSO UDEMY JS
// array - lenght

var days = ['MONDAY','TUESDAY','WEDNESDAY','THUSDAY','FRIDAY','SATURDAY','SUNDAY'];
console.log(days);
console.log(days.length);

// gli array non sono un insieme denso, un fill provoca la crescita dell'array
days[22] = 'prova';
console.log(days);
console.log(days.length);

// modifico la proprietà lenght 
// in questo caso tronco l'array a 7 elementi
days.length = 7;
console.log(days);
console.log(days.length);
