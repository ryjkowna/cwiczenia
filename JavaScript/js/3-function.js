// es5 funkcja

/* function pomnozLiczby(liczba1, liczba2, liczba3) {
/* let liczba1 = 6;
let liczna2 = 8;
/* let liczba3 = 2; */
/* let wynik = 0;

wynik = liczba1 * liczba2 * liczba3
return wynik;
} */
// es5 drugi zapis
/* const pomnozLiczby = function(liczba1,liczba2,liczba3){
  let wynik = 0;

wynik = liczba1 * liczba2 * liczba3
return wynik;
 } */
//  es6 zapis róznicą jest kontekst - funkcja strzałkowa, nie ma function
 const pomnozLiczby = (liczba1,liczba2,liczba3) => {
    let wynik = 0;
  
  wynik = liczba1 * liczba2 * liczba3
  return wynik;
   }
let wynikDzialaniaFunkcji = pomnozLiczby(2,5,10);
console.log(wynikDzialaniaFunkcji);

let drugiWynikDzialaniaFunkcji = pomnozLiczby(4,5,10);
console.log(drugiWynikDzialaniaFunkcji);

let mnoznik1 = 7;
let mnoznik2 = 4;
let mnoznik3 = 108;

mnoznik3=mnoznik2*mnoznik1

wynikDzialaniaFunkcji = pomnozLiczby(mnoznik1,mnoznik2,mnoznik3);
console.log(wynikDzialaniaFunkcji);

const mnozRazy2 = li => { return li*2};
console.log(mnozRazy2(8));
/* const pomnozLiczby=function() {

} */
/* const es6PomnozLiczby =()=>{

} */