'use strict';

// const paniAsiaAlarmuje()=>{

// console.log('Pani Asia Alarmuje!!');
// }

// let parSecond = document.getElementById('parSecond');
// // podajemy bez nawiasw, aby uruchamiało się podczas klikania, a nie ładowania strony
// // parSecond.onclick = paniAsiaAlarmuje;

// parSecond.addEventListener('click', paniAsiaAlarmuje);

// // funkcja anonimowa nie można odpiąć
// parSecond.addEventListener('click', ()=> {
//     console.log ('Pani Jasia alarmuje, ale w funkcji anonimowej!!');
// });

// event - click a callback w powyzszym przypadki paniAsiaAlarmuje


// można usunąć eventListener

// parSecond.removeEventListener( 'click', paniAsiaAlarmuje);


let pierwszyLinkZklasa = document.querySelector('.link');
console.log(pierwszyLinkZklasa);

pierwszyLinkZklasa.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log("znacznik: ");
    console.log(e.target);
});


// let header = document.getElementById('header');
// let mainHeaderText = document.getElementById('main-header-text');

// header.addEventListener('click', (e) => {
//     console.log("Kliknieto header");
// });


// mainHeaderText.addEventListener('click', (e) => {
//     console.log("Kliknieto h1");
// });

// //  zdarzenia uruchamiają się od dołu do góry 

// // console.log(mainHeaderText);


let divsRow = document.getElementsByClassName('row');

for (let element of divsRow) { element.addEventListener('click', () => {
    console.log('Wyswietla się tooltip pokazujacy info o wierszu');
});

}

let buttonEdit = document.getElementsByClassName('edit');

for(let element of buttonEdit){ element.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('wyswietla się edycja tego wiersza');
});
}
