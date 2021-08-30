/************************************************************************************
JS Vertiefung CodeFlow Übung lev1_5: Objects Accessing - Aufgabenstellung

In dieser Übung lernen wir wie man auf die Objekt-Inhalte zugreift.
    * Verwende den Code aus dem Kommentar.
    * Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
        o Geheimnisse
        o Cola
        o Hefter
Hinweis:
    * Accessing Object Properties
*/
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);