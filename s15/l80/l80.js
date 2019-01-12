// SEZIONE 15, LEZIONE 80 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// PASSARE UN JSON AD UN SCRIPT PHP

// CREATE A NEW OBJECT TO MAKE A REQUEST
var xhr = new XMLHttpRequest();

// CREATE A PARAMS VARIABLE
var params = 'name=Daniele&age=28';

// MAKE A GET REQUEST (ASYNC)
xhr.open('GET', "json.php?" + params, true);

// SEND THE DATA TO A SERVER
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        // if the state is ready (4) and the status is ok (200)
        var obj = JSON.parse(xhr.responseText);
        console.log('RESPONSE TEXT: ' + obj);

        var domResult = document.getElementById('idResult');
        
        // PUT THE RESULT IN HTML DOM OBJECT
        domResult.innerHTML = xhr.responseText;
    }
}
