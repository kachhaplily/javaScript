/**
 * dom
 */
let title = document.getElementById('p');
console.log(title);
/**
 * innerText 
 * vs 
 * textContent
 * 
 */

// console.log(title.innerText); // show only visiable text
// console.log(title.textContent); //show hidden text also which is manage by css
// console.log(title.innerHTML); //it return html valu also


/**
 * query selector give only first value from html collection
 */
let dom =document.querySelector('h2');
dom.innerHTML="change this text"
console.log(dom);

let listH2=document.querySelectorAll('h2'); //nodelist not an array
console.log(listH2);

// listH2.forEach(element => {
//     console.log(element);
    
// });
//modigy the elements using index
listH2[1].style.color='red'

collection = document.getElementsByClassName('test')
console.log(collection);
let collectionToArray =Array.from(collection);
console.log(collectionToArray);








