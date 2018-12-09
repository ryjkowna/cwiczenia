// 'use strict';

// // definicja funkcji ajax (dowolna nazwa)
// function ajax( ajaxOptions ) {

//     // parametry połączenia i jego typu, 
//     var options = {
//         type: ajaxOptions.type || "POST",
//         url: ajaxOptions.url || "",
//         onComplete: ajaxOptions.onComplete || function () {},
//         onError: ajaxOptions.onError || function () {},
//         onSuccess: ajaxOptions.onSuccess || function () {},
//         dataType: ajaxOptions.dataType || "text"
//     };

//     // funkcja sprawdzająca czy połączenie się udało?
//     function httpSuccess( httpRequest ) {
//         try {
//             return (httpRequest.status >= 200 && httpRequest.status < 300 ||
//              httpRequest.status == 304 || 
//              navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");    
//         } catch (e) {
//             return false;
//         }
//     }

//     // utworzenie obiektu
//     var httpReq = new XMLHttpRequest();

//     // otwarcie polaczenia
//     httpReq.open(options.type, options.url, true);


//     // jesli stan dokumentu zostal zmieniony -> httpReq.readyState
//     // 0: połączenie nie nawiązane,
//     // 1: połączenie nawiązane,
//     // 2: żądanie odebrane,
//     // 3: przetwarzanie,
//     // 4: dane zwrócone i gotowe do użycia.
//     httpReq.onreadystatechange = function() {

//         // jeśli 4: dane zwrócone i gotowe do użycia
//         if ( httpReq.readyState == 4 ) {

//             // sprawdź status płączenia
//             if ( httpSuccess( httpReq ) ) {

//                 // jesli dane w formacie XML to zworc obiekt returnXML, w przeciwnym wypadku responseText (JSON to tekst)
//                 var returnData = (options.dataType=="xml")? httpReq.responseXML : httpReq.responseText;  // warunek jesli prawda pierwszy jesli falsz drugi warunek - patrz prezentacja


//                 // jeśli wszystko OK
//                 options.onSuccess( returnData );
//             //    console.log(returnData);

//                 // zeruj obiekt, aby nie utrzymywać niepotrzebnego już połączenia z serwerem
//                 httpReq = null;

//             } else {

//                 // w przypadku błędu
//                 options.onError( httpReq.statusText );
//             }

//         }

//     }

//     httpReq.send();
// }
// // to co poniżej jest najważniejsze, 
// ajax({
// type:"GET",
// url:"https://jsonplaceholder.typicode.com/users",
// onSuccess: function(data) {
//     // console.log(data); 
//     var response = JSON.parse(data); // json.parse - robi tablice
//     var pierwszyUzytkownik = response[0]; // bierzemy z tablicy pierwszego uzytkownika po indeksie
//     // console.log(pierwszyUzytkownik.name);  // wywoluje imie uzytkownika - przekazuje klucz

//     var paragraf = document.createElement("p"); // dodajemy paragraf do dokumentu
//     paragraf.innerHTML = "Id: " + pierwszyUzytkownik.id + ", name" + pierwszyUzytkownik.name + ", e-mail: " + pierwszyUzytkownik.email;
//   document.body.appendChild(paragraf); //dodaję do body <p> element

// } 
// });



// ES6 (starsza wersja)

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
        // console.log(response);
        let pierwszyUzytkownik = response[0];
        let paragraf = document.createElement("p"); // dodajemy paragraf do dokumentu
        paragraf.innerHTML = "Id: " + pierwszyUzytkownik.id + ", name: " + pierwszyUzytkownik.name + ", e-mail: " + pierwszyUzytkownik.email;
        document.body.appendChild(paragraf);
    })
    .catch(err => console.log("oops coś poszło nie tak", err))