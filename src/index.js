import {add, mult, addNotes}  from './calc.js';
import("./index.css");
import image from './masai.jpg';

let elem = document.createElement("img");
elem.src = image;

document.getElementById('root').append(elem);
document.getElementById('submit').onclick = addNotes;

console.log(add(5,6));  
console.log(mult(2,6));

