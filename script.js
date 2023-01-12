'use strict';

let newElement= document.createElement('button');
newElement.id = 'btnToClick';
document.body.append(newElement);

const addEvent =  document.getElementById("btnToClick").addEventListener("click", clck);

function clck (event) {
    console.log(event);
    
   }
 

  document.querySelector('.focus').addEventListener("focus", focusing);

  function focusing (event) {
    let foc = event.target.value;
    console.log(foc);
  } 
  
  document.querySelector('.value').addEventListener("input", inputCall);
  
  function inputCall (event) {
    let inp = event.target.value;
     console.log(inp);
 }
  
  
