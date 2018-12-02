'use strict'

let btn = document.createElement('button');
let btnText = document.createTextNode('kliknij');
let classAtr = document.createAttribute('class');

classAtr.value = "btn";

//  przypinamy klase do buttona
btn.setAttributeNode(classAtr);

//  do buttona przypinamy tekst
btn.appendChild(btnText);

// wrzucilismy id
btn.setAttribute("id", "my-btn");
//  usuwamy id 
btn.removeAttribute('id');  
console.log(btn);

// przypinamy do dokumentu - pojawił się już na stronie, appendChild przypisuje na smaym koncu

// document.body.appendChild(btn);

// inny sposób umieszczania elementu na stronie, tutaj pojawi się w paragrafie parFirst na samym końcu - wybieramy lokalizację elementu

let parFirst = document.getElementById("parFirst");
parFirst.appendChild(btn);
//  usuwamy cały element: 
// parFirst.removeChild(btn);

