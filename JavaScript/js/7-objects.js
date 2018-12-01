let domKuby = {
    pokoje: 3,
    kolor: "różowy",
    dach: "skośny",
    opiszDom:function() {

        console.log(this.pokoje);
    }
}

let domKlaudii = {
    pokoje:2,
    kolor:"szary",
    dach: "plaski",
    opiszDom() {
        console.log(this.pokoje);
    }
}


console.log(domKuby.kolor);
domKlaudii.opiszDom();


//  klasy definiujemy z dużej litery

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    opiszOsobe() {
        console.log("Nazywam się: " + this.name + " "+ this.surname);
    }
}

let Kuba = new Person("Kuba", "Kowalski");
Kuba.opiszOsobe();