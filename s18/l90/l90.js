// SEZIONE 18, LEZIONE 90 - CORSO UDEMY JS
// GLI EVENTI IN JAVASCRIPT
// 

// handleSubmit() function
function handleSubmit(elem){
    alert(elem.name.value + " " + elem.lastName.value);
    return false;
}

// execute callback when the DOM is loaded
document.addEventListener('DOMContentLoaded', function(){
    var doc = document;
    var f = doc.querySelector('#form');

    /* FIRST WAY TO HANDLE SUBMIT EVENT
    f.onsubmit = (e) => {
        console.log(e);
        return false;
    };
    */

    /* SECOND WAY TO HANDLE SUBMIT EVENT: USE PREVENTDEFAULT()
    f.onsubmit = (e) => {
        e.preventDefault(); // block default behavior
        alert(e.target.name.value);
    };
    */

    f.addEventListener('submit', (e) => {
        // here the code ...
    });


});
