// SEZIONE 18, LEZIONE 92 - CORSO UDEMY JS
// GLI EVENTI IN JAVASCRIPT
// 

// execute callback when the DOM is loaded
document.addEventListener('DOMContentLoaded', function(){
    // ENSURE THE DOM IS READY
    var doc = document;
    var f = doc.querySelector('#form');
    
    // FIRST WAY TO HANDLE A SUBMIT
    // f.onsubmit = (e) => {
    //     // TEST COMMANDS
    //     // console.log(e);
    //     // console.log('Form f: submitted!');
    //     // return false;

    //     // PREVENT THE DEFAULT BEHAVIOUR
    //     e.preventDefault();
    //     alert(e.target.name.value);
    // }

    // SECOND WAY TO HANDLE A SUBMIT
    f.addEventListener('submit', () => {
        alert('f submitted!');
        return false;
    });
});
