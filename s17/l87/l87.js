// SEZIONE 17, LEZIONE 87 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// createElement e createTextNode

var menu = [
    {
        url: 'http://www.google.it',
        title: 'Google'
    },
    {
        url: 'http://www.microsoft.it',
        title: 'Microsoft'
    },
    {
        url: 'http://www.polimi.it',
        title: 'Politecnico di Milano'
    },
    {
        url: 'http://www.corriere.it',
        title: 'Corriere della Sera'
    },
    {
        url: 'http://www.amazon.it',
        title: 'Amazon'
    }
];

// execute callback when the DOM is loaded
document.addEventListener('DOMContentLoaded', function(){
    var doc, ul, li, a, i, text;
    doc = document;

    ul = doc.createElement('ul');
    ul.setAttribute('class', 'list-group');

    menu.forEach((ele) => {
        li = doc.createElement('li');
        li.setAttribute('class', 'list-group-item');
        a = doc.createElement('a');
        a.href = ele.url;
        a.setAttribute('title', ele.title);
        text = doc.createTextNode(ele.title);

        a.appendChild(text);
        li.appendChild(a);
        ul.appendChild(li);
    });

    doc.body.querySelector('#idContainer').appendChild(ul);
});
