/* 

Aufgabenstellung


In dieser Übung werden wir wieder Objekte kennenlernen.

Erstelle ein Objekt und speichere es als Variable person
Deklariere die Eigenschaft name mit dem Wert deines Namens,
Deklariere die Eigenschaft alter mit dem Wert deines Alters,
Deklariere die Methode (Funktion) sagNameAlter 
Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
Gib in der Konsole person.name und person.alter aus.
Rufe die Funktion sagNameAlter aus dem Objekt auf.
 */

let person = {
    //DOPPELTPUNKT bei object!
    name: "Uyen",
    alter: 24,


    //so scheibt man es im Objekt + Entspannte Schreibweise: literale Schreibweise, weniger Achtung auf Leerzeichen
    sagNameAlter: function () {
        console.log(`Mein Name ist ${this.name} und ich bin ${this.alter} Jahre alt.`)
        //alert(`Mein Name ist ${this.name} und ich bin ${this.alter} Jahre alt.`)
    }
};


console.log(person.name, person.alter)
console.log(person.name)
console.log(person.alter)
//Somit aktiviere, 
person.sagNameAlter();

/* //So kann man es außerhalb des Projekt schreiben
function sagNameAlter(){
} */

/* //this sollte bevorzugt werden, da falls der funktionsname geändert wird, muss ich es bsp. nicht an weiteren bspw. 15 anderen Stellen geändert werden

//unentspannte Schreibweise
alert("Mein Name ist" + this.name + " und bin " + this.alter + " Jahre alt." ) */


/********************************************************************************
JS Vertiefung CodeFlow Übung lev1_2: Objects - Aufgabenstellung

In dieser Übung werden wir wieder Objekte kennenlernen.
    * Erstelle ein Objekt und speichere es als Variable person
    * Deklariere die Eigenschaft name mit dem Wert deines Namens,
    * Deklariere die Eigenschaft alter mit dem Wert deines Alters,
    * Deklariere die Methode (Funktion) sagNameAlter 
        o Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
    * Gib in der Konsole person.name und person.alter aus.
    * Rufe die Funktion sagNameAlter aus dem Objekt auf.
*/
let person = {
    name: 'Klaus',
    alter: 57,

    sagNameAlter: function () {
        console.log(`Mein Name ist ${this.name} und bin ${this.alter} Jahre alt.`);
        // alert(`Mein Name ist ${this.name} und bin ${this.alter} Jahre alt.`);
        //alert(`Mein Name ist ${person.name} und bin ${person.alter} Jahre alt.`);
        //alert("Mein Name ist " + this.name + " und bin " + this.alter + " Jahre alt.");
    }
};
// console.log(person.name, person.alter);
console.log(person.name);
console.log(person.alter);
person.sagNameAlter();



