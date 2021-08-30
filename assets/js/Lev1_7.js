/****************************************************************************************
JS Vertiefung CodeFlow Übung lev1_7: Objects Arrays Loop Accessing - Aufgabenstellung

In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von forEach() zugreift.
Verwende den Code aus dem Kommentarbereich.
Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach()
im HTML aus:
Alle “artist”
Alle “title”
Alle “medium”

Bonus Aufgabe:
Gib alle “release_year” älter als 1975 aus
*/
myMusic.forEach(elt => {
    // document.body.innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.title + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.medium + '<br>');

    // document.body.innerHTML += ('<br>')
    document.getElementById("ausgabe").innerHTML += '<br>';
});

// document.getElementById("ausgabe").innerHTML += "=======================================================================<br>";
document.getElementById("ausgabe").innerHTML += ("".padStart(80, "=") + "<br>");


// "unentspannte" Version
// myMusic.forEach(elt => {
//     if (elt.release_year < 1975) {
//         document.getElementById("ausgabe").innerHTML += (elt.artist + '<br>');
//         document.getElementById("ausgabe").innerHTML += (elt.title + '<br>');
//         document.getElementById("ausgabe").innerHTML += (elt.release_year + '<br>');
//         // document.getElementById("ausgabe").innerHTML = document.getElementById("ausgabe").innerHTML + '<br>';
//         document.getElementById("ausgabe").innerHTML += '<br>';
//     }
// });

// "entspannte" Version
let oldMusic = myMusic.filter(elt => elt.release_year < 1975);
oldMusic.forEach(elt => {
    // document.body.innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.title + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.release_year + '<br>');

    // document.body.innerHTML += ('<br>')
    document.getElementById("ausgabe").innerHTML += '<br>';
});
