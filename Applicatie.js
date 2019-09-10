alert("welkom bij de pizza zelfservice bestel hierna je pizza's");
var Largepizz = prompt("Hoeveel Large pizza's wil je van 10 euro per stuk?", "aantal pizza's");
var Mediumpizz = prompt("Hoeveel Medium pizza's wil je van 5 euro per stuk?", "aantal pizza's");
var Smallpizz = prompt("Hoeveel Small pizza's wil je van 2 euro per stuk?", "aantal pizza's");

alert("U heeft momenteel "+ Largepizz + " large pizza's" + "\n" + "U heeft momenteel "+ Mediumpizz + " Medium pizza's" + "\n" + "U heeft momenteel " + Smallpizz + " Small pizza's" );

Largepizz = Largepizz * 10;
Mediumpizz = Mediumpizz * 5;
Smallpizz = Smallpizz * 2;

document.write("Totale kosten van alle pizza's:");
document.write("Large pizza's: " + Largepizz + "€");
document.write("Medium pizza's: " + Mediumpizz + "€");
document.write("Small pizza's: " + Smallpizz + "€");

var totaalbedrag = Largepizz + Mediumpizz + Smallpizz;

document.write("al uw pizza's bij elkaar kosten: " + totaalbedrag + "€");
