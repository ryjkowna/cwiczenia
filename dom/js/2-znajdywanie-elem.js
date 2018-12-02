"use strict"
let parFirst = document.getElementById("parFirst");
console.log(parFirst);


//  po let wpisujemy nasza nazwę zmienną - dowolnosc
let linkiLink = document.getElementsByClassName ("superlink");
console.log(linkiLink);

//  pobieramy tagi - w tym przypadku wszystkie linki

let wszystkieLinki = document.getElementsByTagName("a");
console.log(wszystkieLinki);

let wszystkieDivy = document.getElementsByTagName("div");
console.log(wszystkieDivy);

// pobiera pierwszy selektor cssa z wszystkich
let pierwszyLinkSuperlink = document.querySelector(".superlink");
console.log(pierwszyLinkSuperlink);

// pobiera wszystkie selektory - całą kolekcję 
let wszystkieLinkSuperlink = document.querySelectorAll(".superlink");
console.log(wszystkieLinkSuperlink);

for (let element of wszystkieLinki) {
    console.log(element);
}

