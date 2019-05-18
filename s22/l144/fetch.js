// Getting POSTs from Url
let postUrl = 'https://jsonplaceholder.typicode.com/posts/';

fetch(postUrl + 1).then(result => {
    if(result.ok){
        console.log(result.headers.get('Content-Type'));
    }else{
        throw new Error('Response failed');
    }
    if(result.headers.get('Content-Type').includes('application/json')) return result.json();
    throw new Error('Response type is not JSON');
}).then(json => {
    console.log(json);
}).catch(err => {
    console.log(err);
});