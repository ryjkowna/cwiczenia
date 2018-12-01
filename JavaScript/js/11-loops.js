/* let liczba = 108;
for (let i=0; i<10; ++i)
 {
    console.log(i + liczba);
}

//  bardzo wazny zapis!

let names = ['Krystian','Anastazja','Klaudia','Wiola'];
names.forEach( (element, index) => {
console.log("Pod indexem: " + index + " jest imie: " + element);

});


 */

//  property i key 
/*  let kuba = {
     name: "Kuba",
     surname: "Nowak",
     wzrost: 194
 }

 for( let key in kuba) {
     console.log(key);
     console.log(kuba[key]);
 }

 */

/* 
  let iter = 0;
  while(iter <10) {
      console.log(iter);
      ++iter;
  }
// warunek raz będzie spełniony
 do {
    console.log(iter);
    ++iter;}
    while(iter<10);
 */


 
/* for (let i=0; i<10; ++i)
 {  if (i == 6){break;}  console.log(i);}
 */
 for (let i=0; i<10; ++i)
 {  if (i == 6){continue;}  console.log(i);}