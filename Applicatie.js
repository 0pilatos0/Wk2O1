/* Paul van der Lei
 Media- en Applicatieontwikkelaar leerjaar 1*/
Main() //hier start de code

function Main () { //function is nu nog niet in gebruik ivm latere toevoeging van code
    alert("welkom bij de pizza zelfservice bestel hierna je pizza's");
    const LargepizzP = 10; 
    const MediumpizzP = 5; 
    const SmallpizzP = 2;  
    //const voor de prijzen aanmaken

    var Largepizz = prompt("Hoeveel Large pizza's wil je van "+LargepizzP +" euro per stuk?", "aantal pizza's"); 
    var Mediumpizz = prompt("Hoeveel Medium pizza's wil je van "+MediumpizzP + " euro per stuk?", "aantal pizza's"); 
    var Smallpizz = prompt("Hoeveel Small pizza's wil je van  "+SmallpizzP +" euro per stuk?", "aantal pizza's"); 
    //vragen naar hoeveelheid van de vraag + opslaan als var

    alert("U heeft momenteel "+ Largepizz + " large pizza's" + "\n" + "U heeft momenteel "+ Mediumpizz + " Medium pizza's" + "\n" + "U heeft momenteel " + Smallpizz + " Small pizza's" );
    //weergaven an alle items aangevraagd door gebruiker

    Largepizz = Largepizz * LargepizzP; 
    Mediumpizz = Mediumpizz * MediumpizzP;
    Smallpizz = Smallpizz * SmallpizzP;
    //berekenen van totaalprijzen per pizza soort


    document.write("Totale kosten van alle pizza's:");
    document.write("<br>");
    document.write("<br>");
    document.write("Large pizza's: " + "€" + Largepizz);
    document.write("<br>");
    document.write("Medium pizza's: "+ "€" + Mediumpizz );
    document.write("<br>");
    document.write("Small pizza's: "+ "€" + Smallpizz );
    document.write("<br>");
    document.write("<br>");
    //weergeven van het bonnetje met alle totaalprijzen

    var totaalbedrag = Largepizz + Mediumpizz + Smallpizz;
    //totaalbedrag berekenen en dat terug opslaan als var totaalbedrag

    document.write("al uw pizza's bij elkaar kosten: "+ "€" + totaalbedrag );
    //totaalbedrag weergeven onderaan het scherm
}
