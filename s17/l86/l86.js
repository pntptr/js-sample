// SEZIONE 17, LEZIONE 86 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// parentNode and firstChild

document.addEventListener('DOMContentLoaded', function(){
    var doc = document;
    var container = doc.querySelector('#idContainer');
    console.log(container);

    // how to access to parent node element
    container.parentNode.style.background = '#c0c0c0';
    //alert(container.children[0].children.length);

    console.log(container.firstChild);
    console.log(container.firstElementChild);

    container.firstElementChild.style.color = 'green';
    
    var section = container.firstElementChild;
    
    // remove the child element
    // container.removeChild(section);

    // clone an element
    var sectionClone = section.cloneNode(true);

    // append element
    container.appendChild(sectionClone);

});
