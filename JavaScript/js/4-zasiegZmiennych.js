let imie = "Klaudia"; 
// nazwisko jest dostepne lokalnie, zamkniete lokalne zmienne są ważniejsze niż globalne
const dodajNazwisko= () => {let nazwisko = "Nowak";
let imieInazwisko = imie +" "+ nazwisko ;

console.log(imieInazwisko);  }
console.log(imie);
dodajNazwisko();

const dodaj2RazyNazwisko= (imie) => {let nazwisko = "Nowak";
let imieInazwisko = imie +" "+ nazwisko + nazwisko;

console.log(imieInazwisko);  }

dodaj2RazyNazwisko("Magdalena");