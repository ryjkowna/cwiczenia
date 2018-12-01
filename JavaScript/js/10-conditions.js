let wzrostKuby = 170;
let wzrostKlaudii = 170;
if (wzrostKlaudii < wzrostKuby) {
    console.log("Klaudia jest niższa");
}
/* 
if (wzrostKlaudii < wzrostKuby) {
    console.log("Klaudia jest niższa");

} else{ 
    console.log("Kuba jest niższy")} */

    if (wzrostKlaudii < wzrostKuby) {
        console.log("Klaudia jest niższa");
    } else if ( wzrostKlaudii == wzrostKuby) 
    {console.log("Kuba jest tak wysoki jak Klaudia");}
        
     else{ 
        console.log("Kuba jest niższy")}

        let opcja = 1;

        switch (opcja) {
            case 0:
            console.log("Wybrano małą czarną");
            // break przerywa sprawdzanie warunków
            break;
            case 1:
            console.log("małą czarną z mlekiem");
            break;
            case 2:
            console.log("wybrano capuccino");
            break;
            default:
            console.log("wybrano espresso");
        }
