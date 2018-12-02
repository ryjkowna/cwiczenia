'use strict';

let h1MainHeader = document.getElementById('main-header');

// console.log(h1MainHeader);

h1MainHeader.innerText = "nowy header text";

// pobieracaly header - []
let header = document.getElementsByTagName('header')[0];
console.log(header);

// wstawia calosc jako tekst
// header.innerText = 'nowy inner text <p>nowy paragraf</p>';
// zastępuje zawartość headera 
// header.innerHTML ='<div>nowy inner text <p>nowy paragraf</p></div>';

// usuwa cały header i zastępuje nowym włącznie z header
header.outerHTML = '<div id="nowy-div">nowy inner text <p>nowy paragraf</p></div>';

let nowyDiv = document.getElementById('nowy-div');
console.log(nowyDiv);
// nadajemy klasę atrybutowi - nowy-div
nowyDiv.setAttribute("class", "nowa-klasa");
//  i zmieniamy nazwę klasy 
nowyDiv.className = "klasa druga-klasa trzecia-klasa";
//  zmieniamy id 
nowyDiv.id = "calkiem-nowy-div";
// usuwamy i dodajemy klasy 
nowyDiv.classList.remove('klasa');
nowyDiv.classList.add('krystian');
// jeden toggle wlaczy się klasa, drugi raz znikła klasa parzystw - włącza; nieparzyste ilosci - usuwa klasę
nowyDiv.classList.toggle('toggle');
nowyDiv.classList.toggle('toggle');
// console.log(nowyDiv.classList);

// zmiana styli
nowyDiv.style.color = 'red';
nowyDiv.style.backgroundColor = 'yellow';

