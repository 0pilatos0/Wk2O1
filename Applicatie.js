/* Paul van der Lei
 Media- en Applicatieontwikkelaar leerjaar 1*/
 const button = document.querySelector('input');
 button.addEventListener('click', Main);
 
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


    var LargepizzT = Largepizz * LargepizzP; 
    var MediumpizzT = Mediumpizz * MediumpizzP;
    var SmallpizzT = Smallpizz * SmallpizzP;
    //berekenen van totaalprijzen per pizza soort


    document.write("Totale kosten van alle pizza's:");
    document.write("<br>");
    document.write("<br>");
    document.write("Large pizza's: " + LargepizzP + ", totaal bedrag: " + "€" + LargepizzT);
    document.write("<br>");
    document.write("Medium pizza's: " + MediumpizzP + ", totaal bedrag: " + "€" + MediumpizzT);
    document.write("<br>");
    document.write("Small pizza's: " + SmallpizzP + ", totaal bedrag: " + "€" + SmallpizzT);
    document.write("<br>");
    document.write("<br>");
    //weergeven van het bonnetje met alle totaalprijzen

    var totaalbedrag = LargepizzT + MediumpizzT + SmallpizzT;
    //totaalbedrag berekenen en dat terug opslaan als var totaalbedrag

    document.write("al uw pizza's bij elkaar kosten: "+ "€" + totaalbedrag );
    //totaalbedrag weergeven onderaan het scherm
    
}
