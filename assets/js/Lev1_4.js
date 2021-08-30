/* JS Vertiefung
CodeFlow Übung lev1_4: Objects Accessing

Aufgabenstellung


In dieser Übung lernen wir, wie man auf die Objekte zugreift.

Verwende den Code aus dem Kommentarbereich.
Greife auf die Werte dieses Objekts zu:
"Nala"
"Droopy"
und lasse dir einmal alle Hundenamen anzeigen
Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.


 */

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"],
            addDog: function (dogName){
                this.names.push(dogName);
            }
    }
];

//Index muss immer mit Eckeklammer angesprochen werden
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[0].names[1]);

//Array-Definition: let array = [...];
//Object-Definition: let object = {...}; alles was vor dem Doppelpunkt ist, ist der key und nach dem Doppeltpunkt, ist der Attribut/Value

console.log(unsereHaustiere[1].names)
unsereHaustiere[1].names.forEach(elt => {console.log(elt)});

//Methode ist eine Funktion/Aufruf

let dog = prompt("Hundename?");



//In einem ARRAY kann mehrere Objekte , in einem Eckeklammer kann mehrere geschweifte Klammern rein, nach jedem Komma kann ich auch noch mal ein Objekt hinzufügen


/* 
//Methode 2: Das ist eine Schreibweise außerhalb des Object - explizit muss ich da auf den Index zugreifen und dann den Index des array und dann kann man est pushen 
function addDogExtern(dog){
    unsereHaustiere[1].names.push(dog)
} 
*/

unsereHaustiere[1].addDog(dog);
console.log(unsereHaustiere[1].names)


/*PAPAKLAUS
    * Greife auf die Werte dieses Objekts zu:
        o "Nala"
        o "Droopy"
*/
console.log(unsereHaustiere[0].names[1]); // Nala
console.log(unsereHaustiere[1].names[2]); // Droopy



//( lasse dir einmal alle Katzenamen anzeigen)
console.log(unsereHaustiere[0].names);

//* und lasse dir einmal alle Hundenamen anzeigen
console.log(unsereHaustiere[1].names);

// unsereHaustiere[1].names.forEach(elt => {
//     console.log(elt)
// });

unsereHaustiere[1].names = [];
// fuege Balu und Snoopy hinzu
unsereHaustiere[1].addDog("Balu");
unsereHaustiere[1].addDog("Snoopy");
console.log(unsereHaustiere[1].names);