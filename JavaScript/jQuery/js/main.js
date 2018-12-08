
// cały jquery bedzie się znajdował pomiędzy $()


$(() => {
                                 // DOM elements
//     // console.log("działa")

//     let element = $(".paragraf");
//     // console.log(paragrafy); sprawdzenie czy pojawiają się paragrafy
//     element = $("#naglowek").css("color","red"); // ustawiamy jedną właściwość css
//     element = $("p"); // element html, nadpisalismy powyzsze
//     element = $("p").css({color:"green", backgroundColor: "yellow"}); // ustawiamy za jednym zamachem dwie własciwosci css
// $("input[type='text']").val("jakiś tekst"); // tutaj wsadzamy tresc do inputa val=value
// $("#naglowek").addClass("blue"); // dodajemy klasę
// $("#naglowek").removeClass("blue"); // usuwamy klasę

//    console.log(element);


                         //DOM manipulation


// $(".paragraf").each((index, element) => {
//     if (index !==0) {
//         $(element).css({backgroundColor: "green", fontSize: "3em"});
//     }
// })

// console.log($("body").find(".paragraf")); // find


// jQuery events

$("#naglowek").mouseenter(() => {
    $(".toggle").toggle(()=>{
        $(".toggle").css({color: "red"});
    })

})
$("#naglowek").on({ //laczymy kilka eventow
    "mouseover": () =>{ $(".toggle").css("backgroundColor", "yellow");

    },
"dblclick": () => {
    console.log("klick")
}
})


});
